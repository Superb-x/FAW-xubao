import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import "@/style/app.scss"
// components
import Login from '@/containers/Login'


const auth = true;

class App extends Component {
    render() {
        return (
            <Route path="/" component={Login}></Route>
        )
    }
}

export default App