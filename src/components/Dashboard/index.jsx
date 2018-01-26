import React, { Component } from 'react';
import {
    Link,
    Route
} from 'react-router-dom'
import i from '@/style/icon.scss'
import s from './index.scss'
import fetch from '@/axios'
import qs from 'qs'

class Mainboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 1
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(function(prev, props){ //此处可以用箭头函数代替
            console.log(prev, props); //此处的props指向的是当前组件的props
            return {
                count: prev.count+1
            }
        })
    }

    componentWillMount() {
        fetch.get('/Index/Vendor/index')
        .then((res) => {
            console.log(res)
        }) 
        .catch((err) => {
            console.log(err)
        })
    }

    render() {
        return(
            <div className={s.main}>
                <div className={s.title}>
                    <span>看全国范围的数据</span>
                    <div className={s.rwrap}>
                        <select className={s.sel}>
                            <option value="">全国范围</option>
                            <option value="1">华东</option>
                            <option value="2">华北</option>
                            <option value="3">华中</option>
                            <option value="4">华南</option>
                            <option value="5">西南</option>
                            <option value="6">西北</option>
                            <option value="7">东北</option>
                        </select>
                        <span>2017年9月19日</span>
                    </div>
                </div>
                <div className={s.total}>
                    <Link to="/">
                        <div>
                            <span className={s.num}>
                                <em>0</em>
                            </span>
                            <span className={s.txt}>新增应续保量</span>
                        </div>
                    </Link>
                    <Link to="/card/123">
                        <div>
                            <span className={s.num}>
                                <em>0</em>
                            </span>
                            <span className={s.txt}>新增应续保量</span>
                        </div>
                    </Link>
                    <Link to="/">
                        <div>
                            <span className={s.num}>
                                <em>0</em>
                            </span>
                            <span className={s.txt}>新增应续保量</span>
                        </div>
                    </Link>
                    <div onClick={this.handleClick}>点击测试</div>
                </div>
            </div>
        )
    }
}

export default Mainboard