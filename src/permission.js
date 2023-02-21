// 处理路由权限
import router from '@/router'
import store from '@/store'
// 定义白名单
const whiteList = ['/login', '/404']

// 权限处理
router.beforeEach((to, from, next) => {
  if (store.getters.token) {
    // 登录了，判断要去的是否是登录页面
    // 要去的是登录页则进行跳转
    // 不是去登录页，去哪就去哪
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    // 没有token判断是否在白名单内
    // 在白名单内去哪就去
    // 不在白名单内，就去登录页面
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
