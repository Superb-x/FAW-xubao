import axios from 'axios'

export default fetch = axios.create({
    baseURL: 'http://xubao.faw.chenghx.com',
    timeout: 10000,
    headers: { 
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' 
    },
})