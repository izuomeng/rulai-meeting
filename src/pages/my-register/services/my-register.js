import request from '@/utils/request'

export function getMyRegister() {
  return request('/api/user/getentry')
}
