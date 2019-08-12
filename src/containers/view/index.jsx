import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppBar from '../app-bar'
import ListContainer from '../list-container'

class View extends React.Component {
    render(){
        return (
    <Router>
        <div>
            <Route path={'/'} component={AppBar} />
            <Route path={'filtered-list'} component={ListContainer} />
        </div>
    </Router>
        )
    }
}
export default View