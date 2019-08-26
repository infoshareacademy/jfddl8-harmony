import { store } from '../store'
import { mapObjectToArray } from '../services/mapObjectToArray';
import { errorAsyncActionCreator } from './errors'


const RECIPES_URL = 'https://jfddl8-harmonylublin.firebaseio.com/recipes.json'


// export const loadElements = () => {
//   fetch(RECIPES_URL)
//     .then(result => result.json())
//     .then(data => {
//       if (data.error) return Promise.reject(data)

//       return data
//     })
//     .then(data =>
//       this.setState({
//         recipes: mapObjectToArray(data)
//       })
//     )
//     .catch((data) => {
//       dispatch(errorAsyncActionCreator(data))
//       this.setState({
//         recipes: []
//       })
//     })
// }


const initialState = {
  recipes: []
}

export default (state = initialState, action) => {
  switch (action.type){
    default:
      return state
  }
}