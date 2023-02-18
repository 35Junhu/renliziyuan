import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'

/**
 *
 * @returns 获取token
 */
export function getToken() {
  return Cookies.get(TokenKey)
}

/**
 * 设置token
 * @param {*} token
 * @returns
 */
export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

/**
 *
 * @returns 删除token
 */
export function removeToken() {
  return Cookies.remove(TokenKey)
}
