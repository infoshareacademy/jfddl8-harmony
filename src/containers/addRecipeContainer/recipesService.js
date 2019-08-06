
const URL = 'https://jfddl8-harmonylublin.firebaseio.com/recipes'


export const deleteRecipe = (recipeKey) => {
  return fetch(
     URL + '/' + recipeKey + '.json',
  {
    method: 'DELETE'
  }
  )
}

export const addRecipe = (newRecipe) => {
  return fetch(
    URL + '.json',
    {
      method: 'POST',
      body: JSON.stringify(newRecipe)
    }
  )
}

