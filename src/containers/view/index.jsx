import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppBar from '../app-bar'
import FilteredListContainer from '../../containers/filtered-list-container'

class View extends React.Component {
    render(){
        return (
    <Router>
        <div>
            <Route path={'/'} component={AppBar} />
            <Route path={'filtered-list'} component={FilteredListContainer} />
        </div>
    </Router>
        )
    }
}
export default View