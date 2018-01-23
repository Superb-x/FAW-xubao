import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'
import PropTypes from 'prop-types'

class Card extends Component {
    constructor(props){
        super(props)
        console.log(this)
    }
    render(){
        return(
            <div className="title">
                卡券核销管理
            </div>
        )
    }
}

export default Card