import { mapObjectToArray } from './mapObjectToArray'

const URL = 'https://jfddl8-harmonylublin.firebaseio.com/recipes'


export const deleteRecipe = (recipeKey) => {
  return fetch(
    URL + '/' + recipeKey + '.json',
    {
      method: 'DELETE'
    }
  )
}

export const addRecipeToFireBase = (newRecipe) => {
  return fetch(
    URL + '.json',
    {
      method: 'POST',
      body: JSON.stringify(newRecipe)
    }
  )
}

export const getAllRecipesFromFirebase = () => {
  return fetch(URL)
    .then(r => r.json())
    .then(data => {
      const recipes = mapObjectToArray(data)
      return recipes
    })
}

export const removeRecipeFromBase = (key) => {
  return fetch(URL + key + '.json',
    {
      method: 'DELETE',
    })
}

export const toggleFavoriteRecipeInBase = (key, isFavorite) => {
  return fetch(URL + key + '.json',
    {
      method: 'PATCH',
      body: JSON.stringify({
        isFavorite
      })
    })
}
