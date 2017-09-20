import React, { Component } from 'react';
import {
    Link,
    Redirect,
    withRouter 
} from 'react-router-dom'
import login from './index.scss'
import icon from '@/style/icon.scss'
import * as actions from '@/actions/auth'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import fetch from '@/axios'
import qs from 'qs'


const mapStateToProps = (state, ownProps) => {
    return state
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: bindActionCreators({...actions}, dispatch)
})

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            error: '',
            role: [
                {id:0, name: '厂商'},
                {id:1, name: '经销商'},
                {id:2, name: '续保专员'}
            ],
            currendIndex: 0
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleActiveChange = this.handleActiveChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleStyle() {
        document.getElementById("root").style.height = "100%";
        document.body.style.overflow = "hidden";
    }
    
    handleActiveChange(i) {
        this.setState({
            currendIndex: i
        })
        this.props.actions.changerole(i)
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox'? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value 
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        fetch.post('/Index/index/login',qs.stringify({
            username: this.state.username,
            password: this.state.password,
            gid: this.state.currendIndex + 2
        })).then((res) => {
            console.log(res)
            if(res.data.code !== 200) {
                this.setState({
                    error: res.data.msg
                })
            } else {
                this.props.actions.loginstatus(true);
                this.props.actions.changename(res.data.data.username);
                this.props.history.push('/home');
                localStorage.setItem('userinfo', JSON.stringify(res.data.data))
            }
        }).catch((err) => {
            console.log('error', err)
            this.setState({
                error: err.data.msg
            })
        })
    }

    componentWillMount() {
        // 在钩子函数中设置样式
        this.handleStyle()
    }

    componentWillUnmount() {
        document.getElementById("root").style.height = "auto";
        document.body.style.overflow = "hidden";
    }

    render() {
        return (
            <div className={login.wrap}>
                <div className={login.top}>
                    <p className={login.logo}></p>
                </div>
                <div className={login.form}>
                    <form onSubmit={this.handleSubmit} className={login.inputWrap}>
                        <h1>一汽集团续保业务管理系统</h1>
                        <div className={login.wrapper}>
                            <div className={login.nav}>
                                {this.state.role.map((item, index) => {
                                    let active = item.id === this.state.currendIndex ? login.active : null;
                                    return <a key={index} onClick={this.handleActiveChange.bind(this,index)} className={active} href="javascript:void(0)">{item.name}</a>                            
                                })}
                            </div>
                            <div className={login.input}>
                                <label htmlFor="">
                                    <i className={login.user + ' ' + icon.icon}></i>
                                </label>
                                <input type="text" name="username" onChange={this.handleInputChange} required />
                            </div>
                            <div className={login.input}>
                                <label htmlFor="">
                                    <i className={login.pwd + ' ' + icon.icon}></i>
                                </label>
                                <input type="password" name="password" onChange={this.handleInputChange} required />
                            </div>
                        </div>
                        <p className={login.tips}>{this.state.error}</p>
                        <button type="submit">登录</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))