import React from 'react';
import Router from './router/Router'
import './index.css'
import Navigation from './router/Navigation'
import { MainWrapper } from './App.styled'


const App = (props) => (
  <MainWrapper>
    <Router>
      <Navigation />

    </Router>
  </MainWrapper >
)

export default App
