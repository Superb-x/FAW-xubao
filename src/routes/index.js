import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    withRouter
} from 'react-router-dom'
// components
import Home from '@/containers/Home'
import About from '@/components/About'

const ROUTES = (
    <Route exact path="/" component={Home}></Route>
)

export default ROUTES