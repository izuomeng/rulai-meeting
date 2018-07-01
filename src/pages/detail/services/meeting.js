import request from '@/utils/request'

export function getMeetingsByID(id = 1) {
  return request(`/api/user/conference/${id}`, {
    method: 'get'
  })
}
