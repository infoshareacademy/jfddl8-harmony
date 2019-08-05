import React from 'react'
import AppBar from './containers/app-bar'
import View from './containers/view'
import ListContainer from './containers/list-container'


function App() {
  return (
    <div className="App">
      <AppBar></AppBar>
      <div>
        <View />

      </div>
      <div>
      <ListContainer />
      </div>
    </div>
  )
}

export default App
