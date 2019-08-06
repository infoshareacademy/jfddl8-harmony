
const URL = 'https://jfddl8-harmonylublin.firebaseio.com/recipes'

export const addRecipe = (newRecipe) => {
  return fetch(
    URL + '.json',
    {
      method: 'POST',
      body: JSON.stringify(newRecipe)
    }
  )
}

export const deleteRecipe = (recipeKey) => {
  return fetch(
    URL + '/' + recipeKey + '.json',
    {
      method: 'DELETE'
    }
  )
}