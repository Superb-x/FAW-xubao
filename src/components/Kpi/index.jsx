import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'
import s from './index.scss'

class Kpi extends Component {
    render() {
        return (
            <div className={s.main}>
                <h1>KPI组件</h1>
                <Link to="/">返回首页</Link>
            </div>
        )
    }
}

export default Kpi