import request from '../utils/request'

export function getUserInfo() {
  return request('/api/user/session/info')
}

export function search(name) {
  return request(`/api/user/search/1?name=${name}`)
}

export function resetPwd(body) {
  return request('/api/user/password/reset', {
    method: 'post',
    body
  })
}
