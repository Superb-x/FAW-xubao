import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'
import PropTypes from 'prop-types'

//css
import s from './index.scss'

class Crumb extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className={s.wrap}>
                当前位置: 
                <Link to="/">首页</Link>
            </div>
        )
    }
}

Crumb.propTypes = {
    items: PropTypes.array.isRequired
}

export default Crumb