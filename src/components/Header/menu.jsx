import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'

import header from './index.scss'

class Menu extends Component {
    constructor(props){
        super(props)
        this.state = {
            show: false
        }
    }
    render(){
        return(
            <div className={header.sub} style={this.state.show?{display: 'block'}:{}}>
                {this.props.items.map((item, index) => {
                    return <Link to={item.url} key={index} className={header.item}>{item.name}</Link>
                })}
            </div>
        )
    }
}

Menu.propTypes = {
    items: PropTypes.array.isRequired
}

export default Menu