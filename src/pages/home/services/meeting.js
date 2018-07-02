import request from '@/utils/request'

export function getAllMeetings(page = 1) {
  return request(`/tapi/user/search/${page}`, {
    method: 'post'
  })
}
