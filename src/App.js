import React from 'react'
import AppBar from './containers/app-bar'
import View from './containers/view'
import SearchForm from './containers/search-form'

function App() {
  return (
    <div className="App">
      <AppBar></AppBar>
      <div>
        <View />

      </div>
      <div>
        <SearchForm />
      </div>
    </div>
  )
}

export default App
