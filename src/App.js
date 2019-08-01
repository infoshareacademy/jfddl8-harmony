import React from 'react';
import Router from './router/Router'
import './index.css'
import Navigation from './router/Navigation'

const App = (props) => (
  <div>
    <Router>
      <Navigation />
    </Router>
  </div >
)

export default App
