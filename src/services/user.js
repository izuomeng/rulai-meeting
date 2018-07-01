import request from '../utils/request'

export function getUserInfo() {
  return request('/api/user/session/info')
}
