import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import "@/style/app.scss"
// components
import Home from '@/containers/Home'
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
    }
    render() {
        return (
            <div style={this.props.router.location.pathname==="/login"?{height: "100%"}:{}}>
                <Route exact path="/" component={Home}></Route>
                <Route path="/login" component={Login}></Route>
            </div>
        )
    }
}

export default App