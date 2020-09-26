import {requset}  from './request'

export function getHomeMultidata(){
    return requset({
        url:'/home/multidata'
    })
}