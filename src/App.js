import React from 'react'

import AppBar from './containers/app-bar'
import View from './containers/view'

import AddRecipeContainer from './containers/addRecipeContainer/AddRecipeContainer'



function App() {
  return (
    <div className="App">
      <AppBar />
      <View />
      <AddRecipeContainer/>
    </div>
  )
}

export default App
