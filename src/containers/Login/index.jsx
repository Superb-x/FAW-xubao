import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'
import login from './index.scss'
import icon from '@/style/icon.scss'
import * as actions from '@/actions/auth'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    return state
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: bindActionCreators({...actions}, dispatch)
})

@connect(mapStateToProps, mapDispatchToProps)
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '刘祥麟',
            password: '',
            role: [
                {id:0, name: '厂商'},
                {id:1, name: '经销商'},
                {id:2, name: '续保专员'}
            ],
            currendIndex: 0
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleActiveChange = this.handleActiveChange.bind(this)
    }

    handleStyle() {
        document.getElementById("root").style.height = "100%";
        document.body.style.overflow = "hidden";
    }
    
    handleActiveChange(i) {
        console.log(i)
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

    componentWillMount() {
        // 在钩子函数中设置样式
        this.handleStyle()
    }

    render() {
        const _this = this
        return (
            <div className={login.wrap}>
                <div className={login.top}>
                    <p className={login.logo}></p>
                </div>
                <div className={login.form}>
                    <form action="" className={login.inputWrap}>
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
                                <input type="text" name="username" onChange={this.handleInputChange} />
                            </div>
                            <div className={login.input}>
                                <label htmlFor="">
                                    <i className={login.pwd + ' ' + icon.icon}></i>
                                </label>
                                <input type="text" name="password" onChange={this.handleInputChange} />
                            </div>
                        </div>
                        <p className={login.tips}>{this.state.username}</p>
                        <button type="submit">登录</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login