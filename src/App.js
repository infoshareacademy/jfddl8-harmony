import React from 'react'
import Router from './router/Router'
import './index.css'
import Navigation from './router/Navigation'
import { MainWrapper } from './App.styled'

import { store } from './store'
import { Provider } from 'react-redux'

const App = (props) => (
  <Provider store={store}>
    <MainWrapper>
      <Router>
        <Navigation />
      </Router>
    </MainWrapper >
  </Provider>

)

export default App
