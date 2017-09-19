import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import i from '@/style/icon.scss'
import s from './index.scss'
import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://xubao.faw.chenghx.com',
    timeout: 10000
})

class Mainboard extends Component {
    constructor(props){
        super(props)
        console.log(this.props)
    }

    componentWillMount() {
        instance.get('/Index/Vendor/index')
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
                    <a href="/Public/data-follow-tongji-boss.html">
                        <div>
                            <span className={s.num}>
                                <em>0</em>
                            </span>
                            <span className={s.txt}>新增应续保量</span>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

export default Mainboard