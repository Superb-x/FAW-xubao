import React, { Component } from 'react';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '@/actions/auth'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import CSSTransition from 'react-transition-group/CSSTransition'
import home from './index.scss'

//components
import Header from '@/components/Header'
import Kpi from '@/components/Kpi'
import Mainboard from '@/components/Dashboard'
import Crumb from '@/components/Crumb'

const mapStateToProps = (state, ownProps) => {
    return state
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: bindActionCreators({...actions}, dispatch)
})

@connect(mapStateToProps, mapDispatchToProps)
class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            property: [
                {name: 'KPI'},
                {name: '考核'}
            ]
        }
        console.log(this)
    }

    render() {
        return(
            <div className={home.wrap}>
                <Header name={this.props.auth.name} role="1"/>
                <Crumb items={this.state.property}/>
                <TransitionGroup>
                    <CSSTransition key={this.props.router.location.pathname} timeout={500} classNames="fade" mountOnEnter={true} unmountOnExit={true}>
                        <Switch>
                            <Route exact path="/home" component={Mainboard}/>
                            <Route path="/home/follow" component={Kpi}></Route>                            
                            <Route path="/home/kpi" component={Kpi}/>
                        </Switch>                       
                    </CSSTransition>
                </TransitionGroup>
            </div>
        )
    }
}

export default Home