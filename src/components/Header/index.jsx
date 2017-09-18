import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom'
import PropTypes from 'prop-types';
import icon from '@/style/icon.scss'
import header from './index.scss'


class Header extends Component {
    constructor(props) {
        super(props)
        this.handleEnter = this.handleEnter.bind(this)
        this.handleLeave = this.handleLeave.bind(this)
    }

    handleEnter(e) {
        console.log(this)

    }

    handleLeave() {
        console.log(this)
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
                            <li><Link to="/"><i className={header.iconindex+ ' ' + icon.icon}></i>首页</Link></li>
                            <li><Link to="/login"><i className={header.iconlist+ ' '+icon.icon}></i>日跟进统计表</Link></li>
                            <li><Link to="/about"><i className={header.kpi+' '+icon.icon}></i>KPI考核统计表</Link></li>
                        </ul>
                        <ul className={header.sys}>
                            <li><Link to="/logout"><i className={header.logout+' '+icon.icon}></i>退出</Link></li>
                            <li><Link to="/logout"><i className={header.modifypwd+' '+icon.icon}></i>修改密码</Link></li>
                            <li onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
                                <Link to="/logout"><i className={header.setting+' '+icon.icon}></i>系统设置<i className={header.select+' '+icon.icon}></i></Link>
                                <div className={header.sub} style={{display: 'block'}}>
                                    <Link to="/" className={header.item}>你好</Link>
                                    <Link to="/" className={header.item}>你好</Link>
                                    <Link to="/" className={header.item}>你好</Link>
                                    <Link to="/" className={header.item}>你好</Link>
                                    <Link to="/" className={header.item}>你好</Link>
                                </div>
                            </li>
                        </ul>
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