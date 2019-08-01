import React from 'react'
import AppBar from './containers/app-bar'
import View from './containers/view'
import FilteredListContainer from './containers/filtered-list-container'


function App() {
  return (
    <div className="App">
      <AppBar></AppBar>
      <div>
        <View />

      </div>
      <div>
      <FilteredListContainer />
      </div>
    </div>
  )
}

export default App
