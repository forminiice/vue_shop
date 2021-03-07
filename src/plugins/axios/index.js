// http://www.ysqorz.top:8888/api/private/v1/
// http://www.ysqorz.top:8091/vueshop/reset 重置数据用时1min上下

import axios from 'axios'

export function request (config) {
  // 1. 创建axios的实例
  const instance = axios.create({
    baseURL: 'http://www.ysqorz.top:8888/api/private/v1/',
    timeout: 5000
  })
  // 2. axios 拦截
  // 拦截请求
  instance.interceptors.request.use(config => {
    // 请求成功
    return config
  }, err => {
    // 请求失败
    console.log(err)
  })
  // 拦截响应
  instance.interceptors.response.use(result => {
    // 响应成功
    return result.data
  }, err => {
    // 响应失败
    console.log(err)
  })
  // 3. 发送真正的网络请求
  return instance(config)
}
