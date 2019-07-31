import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppBar from '../app-bar'

class View extends React.Component {
    render(){
        return (
    <Router>
        <div>
            <Route path={'/'} component={AppBar} />
        </div>
    </Router>
        )
    }
}
export default View