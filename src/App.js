import React from 'react'
import AppBar from './containers/app-bar'
import View from './containers/view'
import AddRecipeContainer from './containers/addRecipeContainer'
import RecipesTable from './containers/recipesTable/RecipesTable'

function App() {
  return (
    <div className="App">
      <AppBar />
      <View />
      <AddRecipeContainer/>
      <RecipesTable/>
    </div>
  )
}

export default App
