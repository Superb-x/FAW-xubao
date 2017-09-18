import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'
import PropTypes from 'prop-types';
import icon from '@/style/icon.scss'
import header from './index.scss'


class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className={header.wrap}>
                <div className={header.top}>
                    <Link to="/" className={header.logo}></Link>
                    <div className={header.welcome}>欢迎您: {this.props.name}</div>
                </div>
                <div className={header.bottom}>
                    <div className={header.center}>
                        <ul className={header.nav}>
                            <li><i className={header.iconindex+ ' ' + icon.icon}></i><Link to="/">首页</Link></li>
                            <li><Link to="/login">线索</Link></li>
                            <li><Link to="/">KPI考核</Link></li>
                        </ul>
                        <ul className={header.sys}></ul>
                    </div>
                </div>
            </div>
        )
    }
}

header.propTypes = {
    role: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    property: PropTypes.array
}

export default Header