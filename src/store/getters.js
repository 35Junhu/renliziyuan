const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  name: state => state.user.userInfo
  // 快速访问名：state => state.模块名.state中存储的变量
}
export default getters
