import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    withRouter
} from 'react-router-dom'
// components
import App from '../App'
import Home from '@/containers/Home'
import Login from '@/containers/Login'

class CRouter extends Component {
    render() {
        return(
            <div>
                <Route path="/" component={App}></Route>
                <Route path="/" exact component={Home}></Route>
                <Route path="login" component={Login}></Route>
            </div>
        )
    }
}

export default CRouter

