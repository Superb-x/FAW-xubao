import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import home from './index.scss'

//components
import Header from '@/components/Header'

class Home extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return(
            <div className={home.wrap}>
                <Header name="刘祥麟" role="1"/>
            </div>
        )
    }
}

export default Home