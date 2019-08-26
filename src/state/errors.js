const NEW = 'errors/NEW'

export const errorAsyncActionCreator = (error) => (dispatch, getState) => {
  
  




  alert(JSON.stringify(error))
  console.log(JSON.stringify(error))
  dispatch(newActionCreator(error))
}

const newActionCreator = (error) => ({
  type: NEW,
  error
})

const initialState = {
  errors: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW:
      return {
        ...state,
        errors: state.errors.concat(action.error)
      }
    default:
      return state
  }
}