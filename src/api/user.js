import request from '@/utils/request'

/**
 *
 * @param {Object} data 手机号和密码
 * @returns
 */
export function login(data) {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}

/**
 *
 * @returns 获取用户信息
 */
export function getUserInfo() {
  return request({
    url: '/sys/profile',
    method: 'post'
  })
}

export function getInfo(token) {

}

export function logout() {

}
