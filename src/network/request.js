import axios from 'axios'

export function requset(config) {
    //1.创建axios实例
    const instance = axios.create({
        baseURL:'http://',
        timeout:5000
    })
    // 2.axios 拦截器
    // 2.1 请求拦截的作用
    instance.interceptors.request.use(config =>{
        console.log(config);
        // 1.比如config中一些信息不符合服务器的要求
        // 2.比如每次发起网络请求时，都希望在页面中显示一个请求图标
        // 3.某些网络请求（登录请求（token））,必须携带一些特殊的信息
        return config
    },err =>{
        console.log(err)
    })
    // 2.2 响应拦截
    instance.interceptors.response.use(res =>{
        console.log(res);
        return res.data;
    },err =>{
        console.log(err);
    })

    // 3.发起真正的网络请求
    return instance(config)
}