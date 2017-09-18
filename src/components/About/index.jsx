import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'

class About extends Component {
    render() {
        return (
            <div>
                <h1>这是关于组件</h1>
                <Link to="/">返回首页</Link>
            </div>
        )
    }
}

export default About