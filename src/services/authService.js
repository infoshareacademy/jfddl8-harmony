import jwt from 'jsonwebtoken'

const SIGN_UP_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCRt2szYV4mV5V9n2O55T7xcAxeXYlPTho'
const SIGN_IN_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCRt2szYV4mV5V9n2O55T7xcAxeXYlPTho'

export const logIn = (email, password) => {
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
      if(data.error) return Promise.reject(data)

      return data
    })
    .then(data => {
      localStorage.setItem('idToken', data.idToken)
      localStorage.setItem('refreshToken', data.refreshToken)

      return data
    })
}

export const logIn = (email, password) => {
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
}


export const isUserLoggedIn = () => {
  const idToken = localStorage.getItem('idToken')

  return idToken ? true : false
}

export const getLoggedInUser = () => {
  if (!isUserLoggedIn()) return null

  const idToken = localStorage.getItem('idToken')

  return jwt.decode(idToken)
}

export const fetchWithToken = (url, options) => {
  // this should be in function eg "getToken"
  const idToken = localStorage.getItem('idToken')

  // this do not work with any other params in url !!!
  const authString = idToken ? '?auth=' + idToken : ''

  return fetch(
    url + authString,
    options
  )
}