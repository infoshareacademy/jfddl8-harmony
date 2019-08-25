import { mapObjectToArray } from '../services/mapObjectToArray';
import { errorAsyncActionCreator } from './errors'


const RECIPES_URL = 'https://jfddl8-harmonylublin.firebaseio.com/recipes.json'

const LOAD_RECIPES = 'recipes/LOAD_RECIPES'

export const loadElementsAsyncActionCreator = () => (dispatch, getState) => {
  fetch(RECIPES_URL)
    .then(result => result.json())
    .then(data => {
      if (data.error) return Promise.reject(data)

      return data
    })
    .then(data =>{
     return mapObjectToArray(data)
    })
    .then(data =>
      dispatch(loadElementsActionCreator(data))
    )
    .catch((data) => {
      dispatch(errorAsyncActionCreator(data))
    })
}

const loadElementsActionCreator = (data) => ({
  type: LOAD_RECIPES,
  data
})


const initialState = {
  recipes: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RECIPES:
      return {
        ...state,
        recipes: action.data
      }
    default:
      return state
  }
}