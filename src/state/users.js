import fetchServiceDuck from './fetchServiceDuck'

const ADD = 'users/ADD'

export const incActionCreator = () => ({
  type: ADD
})


const fetchRecipes = fetchServiceDuck(
  'https://jfddl8-harmonylublin.firebaseio.com/users/',
  'users'
)

export const fetchWithToken = fetchRecipes.fetchWithToken
export const fetchs = fetchRecipes.fetchs
export default fetchRecipes.reducer
