import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    Switch,
    Route,
    withRouter,
    Redirect
} from 'react-router-dom'
import "@/style/app.scss"

// components
import Home from '@/containers/Home'
import Login from '@/containers/Login'
import Card from '@/components/Card'
import Header from '@/components/Header'
import * as actions from '@/actions/auth'

// const asyncComp = (location, cb) => {     // 按需加载组件可用此方法
//     require.ensure([], require => {
//         cb(null, require('echarts/lib/pie').default);
//     }, 'asyncComp');
// };

const mapStateToProps = (state, ownProps) => {
    return state
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: bindActionCreators({...actions}, dispatch)
})

class App extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div style={this.props.router.location.pathname==="/login"?{height: "100%"}:{}}>                
                <Switch>
                    <Route path="/" exact render={() => (
                        this.props.auth.status===1?(
                            <Redirect to="/home"/>
                        ):(
                            <Redirect to="/login"></Redirect>
                        )
                    )}/>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/header" component={Header}></Route>                    
                    <Route path="/card/:cardid" component={Card}></Route>                    
                    <Route path="/login" component={Login}></Route>
                    <Route render={() => (
                        <Redirect to="/home"/>    
                    )}></Route>
                </Switch>                          
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))