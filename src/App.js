import React from 'react'
import Router from './router/Router'

import './index.css'
import Navigation from './router/Navigation'
import { MainWrapper } from './App.styled'
import { store } from './store'
import { Provider } from 'react-redux'
import Auth from './containers/Auth'


const App = (props) => (
  <Provider store={store}>
    <MainWrapper>
      <Auth>
        <Router>
          <Navigation />
        </Router>
      </Auth>
    </MainWrapper >
  </Provider>
)

export default App
