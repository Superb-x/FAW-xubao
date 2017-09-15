import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'
import login from './index.scss'
import icon from '@/style/icon.scss'
let input = null;

class Login extends Component {
    constructor(props) {
        super(props)
    }

    handleStyle() {
        document.getElementById("root").style.height = "100%";
        document.body.style.overflow = "hidden";
    }

    componentWillMount() {
        // 在钩子函数中设置样式
        this.handleStyle()
    }

    render() {
        return (
            <div className={login.wrap}>
                <div className={login.top}>
                    <Link to="/" className={login.logo}></Link>
                </div>
                <div className={login.form}>
                    <form action="" className={login.inputWrap}>
                        <h1>一汽集团续保业务管理系统</h1>
                        <div className={login.wrapper}>
                            <div className={login.nav}>
                                <a href="javascript:void(0)">厂商</a>
                                <a href="javascript:void(0)">经销商</a>
                                <a href="javascript:void(0)">续保专员</a>
                            </div>
                            <div className={login.input}>
                                <label htmlFor="">
                                    <i className={login.user + ' ' + icon.icon}></i>
                                </label>
                                <input type="text" ref={node => {input = node} }/>
                            </div>
                            <div className={login.input}>
                                <label htmlFor="">
                                    <i className={login.pwd + ' ' + icon.icon}></i>
                                </label>
                                <input type="text" ref={node => {input = node} }/>
                            </div>
                        </div>
                        <p className={login.tips}>错误提示信息展示</p>
                        <button type="submit">登录</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login