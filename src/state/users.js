
const ADD = 'users/ADD'

export const incActionCreator = () => ({
  type: ADD
})

const initialState = {
  user: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        user: 'user1'
      }
    default:
      return state
  }
}