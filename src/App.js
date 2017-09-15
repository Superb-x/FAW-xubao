import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import "@/style/app.scss"
// components
import Login from '@/containers/Login'
import * as actions from '@/actions/auth'

const mapStateToProps = (state, ownProps) => {
    return state
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: bindActionCreators({...actions}, dispatch)
})

@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    render() {
        return (
            <Route path="/" component={Login}></Route>
        )
    }
}

export default App