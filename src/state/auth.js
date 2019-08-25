import jwt from 'jsonwebtoken'

import { errorAsyncActionCreator } from './errors'
import { store } from '../store'

const REFRESH_TOKEN_URL = 'https://securetoken.googleapis.com/v1/token?key=AIzaSyCRt2szYV4mV5V9n2O55T7xcAxeXYlPTho'

const SIGN_IN_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCRt2szYV4mV5V9n2O55T7xcAxeXYlPTho'

const SIGN_UP_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCRt2szYV4mV5V9n2O55T7xcAxeXYlPTho'

const SAVE_USER_URL = 'https://jfddl8-harmonylublin.firebaseio.com/users/'

const LOGGED_IN = 'auth/LOGGED_IN'
const LOGGED_OUT = 'auth/LOGGED_OUT'
const SIGNED_IN = 'auth/SIGNED_IN'


export const logInAsyncActionCreator = (email, password) => (dispatch, getState) => {
  return fetch(
    SIGN_IN_URL,
    {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true
      })
    }
  )
    .then(r => r.json())
    .then(data => {
      if (data.error) return Promise.reject(data)

      return data
    })
    .then(data => {
      localStorage.setItem('idToken', data.idToken)
      localStorage.setItem('refreshToken', data.refreshToken)

      dispatch(checkIfUserIsLoggedInAsyncActionCreator())

      return data
    })
    .catch((data) => {
      dispatch(errorAsyncActionCreator(data))
    })
}



export const signInAsyncActionCreator = (email, password) => (dispatch, getState) => {
  return fetch(
    SIGN_UP_URL,
    {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true
      })
    }
  )
    .then(r => r.json())
    .then(data => {
      if (data.error) return Promise.reject(data)

      return data
    })
    .then(data => {
      const user = jwt.decode(data.idToken)
      const key = user && user.user_id
      if (key) {
        fetch(SAVE_USER_URL + key + '.json?', {
          method: 'PATCH',
          body: JSON.stringify(user)
        })
          .then(dispatch(signedInActionCreator()))
      }
    })
    .catch((data) => {
      dispatch(errorAsyncActionCreator(data))
    })
}


export const refreshTokenAsyncActionCreator = () => (dispatch, getState) => {
  return refreshToken()
    .then(data => {
      dispatch(checkIfUserIsLoggedInAsyncActionCreator())

      return data
    })
    .catch((data) => {
      dispatch(errorAsyncActionCreator(data))

      return Promise.reject()
    })
}


export const checkIfUserIsLoggedInAsyncActionCreator = () => (dispatch, getState) => {
  const idToken = localStorage.getItem('idToken')
  const refreshToken = localStorage.getItem('refreshToken')

  if (!checkIfTokenIsValid(idToken) && refreshToken) {
    dispatch(refreshTokenAsyncActionCreator())

    return
  }

  if (idToken && refreshToken) {
    dispatch(loggedInActionCreator(idToken, refreshToken))
  } else {
    dispatch(loggedOutActionCreator())
  }
}


const refreshToken = () => {
  const refreshToken = localStorage.getItem('refreshToken')

  return fetch(
    REFRESH_TOKEN_URL,
    {
      method: 'POST',
      body: JSON.stringify({
        grant_type: 'refresh_token',
        refresh_token: refreshToken
      })
    }
  )
    .then(r => r.json())
    .then(data => {
      if (data.error) return Promise.reject(data)

      return data
    })
    .then(data => {
      localStorage.setItem('idToken', data.id_token)
      localStorage.setItem('refreshToken', data.refresh_token)

      return data
    })
}


window.refreshTokenAsyncActionCreator = () => store.dispatch(refreshTokenAsyncActionCreator())


const checkIfTokenIsValid = (idToken) => {
  if (!idToken) return false

  let decoded = null
  try {
    decoded = jwt.decode(idToken)
  } catch (error) {
    return false
  }

  if (!decoded) return false

  return (Number(decoded.exp) * 1000) > Date.now()
}


const loggedInActionCreator = (idToken, refreshToken) => ({
  type: LOGGED_IN,
  idToken,
  refreshToken,
  userData: jwt.decode(idToken)
})

const signedInActionCreator = () => ({
  type: SIGNED_IN
})

const loggedOutActionCreator = () => ({ type: LOGGED_OUT })


const initialState = {
  isUserLoggedIn: false,
  userData: null,
  idToken: null,
  refreshToken: null
}


export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNED_IN:
      return {
        ...state,
        isUserLoggedIn: true
      }
    case LOGGED_IN:
      return {
        ...state,
        isUserLoggedIn: true,
        idToken: action.idToken,
        refreshToken: action.refreshToken,
        userData: action.userData,
      }
    case LOGGED_OUT:
      return {
        ...initialState
      }
    case 'broke-token':
      return {
        ...state,
        idToken: 'xxx'
      }
    default:
      return state
  }
}