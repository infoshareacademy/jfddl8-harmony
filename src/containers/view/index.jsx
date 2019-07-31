import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppBar from '../app-bar'
import SearchForm from '../search-form'

class View extends React.Component {
    render(){
        return (
    <Router>
        <div>
            <Route path={'/'} component={AppBar} />
            <Route path={'search-form'} component={SearchForm} />
        </div>
    </Router>
        )
    }
}
export default View