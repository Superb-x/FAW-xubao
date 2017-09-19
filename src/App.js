import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    BrowserRouter as Router,
    Route,
    withRouter,
    Redirect
} from 'react-router-dom'
import "@/style/app.scss"
// components
import Home from '@/containers/Home'
import Login from '@/containers/Login'
import About from '@/components/About'
import * as actions from '@/actions/auth'

// const asyncComp = (location, cb) => {     // 按需加载组件可用此方法
//     require.ensure([], require => {
//         cb(null, require('echarts/lib/pie').default);
//     }, 'asyncComp');
// };

const auth = true;

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
                <Route path="/" exact render={() => (
                    auth?(
                        <Redirect to="/home"/>
                    ):(
                        <Redirect to="/login"></Redirect>
                    )
                )}/>
                <Route path="/home" component={Home}></Route>
                <Route path="/login" component={Login}></Route>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))