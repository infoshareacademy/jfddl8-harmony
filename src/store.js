import { createStore, combineReducers } from 'redux'

import users from './state/users'

const reducer = combineReducers({
  users
})

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
