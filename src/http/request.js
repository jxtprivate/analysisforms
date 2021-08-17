import axios from 'axios'
import router from '@/router'
import util from '@/utils/index.js'

const instance = axios.create({
  withCredentials: true,
  timeout: 100 * 1000,
  headers: { 'Content-Type': 'application/json'},
})

// 请求拦截器
instance.interceptors.request.use((request) => {
  // 用户相关的都放行
  if (request.url.startsWith('/api/user/')) {
    return request
  }
  if (!request.headers['Authorization']) {
    let authorization = util.getSerializedStorage('username')!==null ? util.getSerializedStorage('username'):util.getSerializedStorage('admin')
    if (authorization) {
      request.headers['Authorization'] = 'hello world'
    } else {
      router.replace('/login')
    }
  }
  return request
})

// 响应拦截器
instance.interceptors.response.use((response) => {
  if (response.headers['redirect']) {
    router.replace({
      path: response.headers['redirect-path'],
    })
  }
  return response
})

export default instance
