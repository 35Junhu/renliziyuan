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

export function getInfo(token) {

}

export function logout() {

}
