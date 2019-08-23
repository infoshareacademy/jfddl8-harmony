import { store } from '../store'

export default (url, name, mapData) => {
  const GET = name + '/GET'
  const START_FETCHING = name + '/START_FETCHING'
  const STOP_FETCHING = name + '/STOP_FETCHING'


  const getActionCreator = (data) => ({
    type: GET,
    data
  })

  const startFetchingActionCreator = () => ({ type: START_FETCHING })

  const stopFetchingActionCreator = () => ({ type: STOP_FETCHING })

  const initialState = {
    data: null,
    isFetching: false,
    isError: false
  }

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET:
        return {
          ...state,
          data: action.data
        }
      case START_FETCHING:
        return {
          ...state,
          isFetching: true
        }
      case STOP_FETCHING:
        return {
          ...state,
          isFetching: false
        }

      default:
        return state
    }
  }

  return {
    reducer,
  }
}