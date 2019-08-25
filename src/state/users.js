import fetchServiceDuck from './fetchServiceDuck'

const ADD = 'users/ADD'

export const incActionCreator = () => ({
  type: ADD
})

const initialState = {
  user: 0
}


const fetchRecipes = fetchServiceDuck(
  'https://jfddl8-shredders.firebaseio.com/users/',
  'users'
)

export const fetchWithToken = fetchRecipes.fetchWithToken
export const fetchs = fetchRecipes.fetchs
export default fetchRecipes.reducer
