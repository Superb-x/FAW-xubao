import axios from 'axios'

const fetch = axios.create({
    baseURL: 'http://xubao.faw.chenghx.com',
    timeout: 10000,
    headers: { 
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' 
    },
})

fetch.interceptors.request(function(){
    console.log("请求开始")
})