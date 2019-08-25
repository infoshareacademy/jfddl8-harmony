import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import users from './state/users'
import auth from './state/auth'
import errors from './state/errors'
import recipes from './state/recipes'
import snackbar from './state/snackbar'



const reducer = combineReducers({
  auth,
  users,
  errors,
  recipes,
  snackbar
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)
