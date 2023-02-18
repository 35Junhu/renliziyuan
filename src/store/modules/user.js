import { login } from '@/api/user'
// 引用持久化的token方法
import { getToken, setToken, removeToken } from '@/utils/auth'
export default {
  namespaced: true,
  state: {
    token: getToken()
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
    }
  }
}
