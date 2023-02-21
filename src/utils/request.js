// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
import axios from 'axios'
import store from '@/store'
const service = axios.create(
  {
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
  }
) // 创建一个axios的实例
service.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['Authorization'] = `Bearer ${store.getters.token}`
  }
  // 必须返回配置
  return config
}, error => {
  // 发生错误，返回Promise.reject(error)
  return Promise.reject(error)
}) // 请求拦截器

service.interceptors.response.use(response => {
  // 结构结果
  const { data, message, success } = response.data
  if (success) {
    return data
  } else {
    //  提示错误信息
    this.$message.error(message)
    // 返回promise错误状态
    return Promise.reject(new Error(message))
  }
}, error => {
  return Promise.reject(error)
}) // 响应拦截器

export default service // 导出axios实例
