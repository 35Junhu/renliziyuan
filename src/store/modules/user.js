import { login, getUserInfo } from '@/api/user'
// 引用持久化的token方法
import { getToken, setToken, removeToken } from '@/utils/auth'
export default {
  namespaced: true,
  state: {
    token: getToken(),
    userInfo: {}
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      setToken(token)
    },
    // 删除token
    removeToken(state) {
      state.token = null
      removeToken()
    },
    // 设置用户资料
    setUserInfo(state, userInfo) {
      state.userInfo = { ...userInfo }
    },
    // 移出用户资料
    removeUserinfo(state) {
      state.userInfo = {}
    }
  },
  actions: {
    async  loginAction(context, data) {
      // context.commit('setToken', 'token值')
      // 经过响应拦截器处理，这里就是token了
      try {
        const res = await login(data)
        console.log(res)
        // 调用，mutations中方法修改state值
        context.commit('setToken', res)
      } catch (error) {
        console.log(error)
      }
    },
    // 获取用户资料的actions
    async getUserInfo(context) {
      try {
        const res = await getUserInfo()
        console.log(res)
        // 结果调用context中的commit方法进行持久化
        context.commit('setUserInfo', res)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
