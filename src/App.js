import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    BrowserRouter as Router,
    Route,
    withRouter
} from 'react-router-dom'
import "@/style/app.scss"
// components
import Home from '@/containers/Home'
import Login from '@/containers/Login'
import About from '@/components/About'
import * as actions from '@/actions/auth'

const mapStateToProps = (state, ownProps) => {
    return state
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: bindActionCreators({...actions}, dispatch)
})

class App extends Component {
    constructor(props){
        super(props)
        console.log(this.props, 123)
    }
    render() {
        return (
            <div style={this.props.router.location.pathname==="/login"?{height: "100%"}:{}}>
                <Route exact path="/" component={Home}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/about" component={About}></Route>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))