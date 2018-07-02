import request from '@/utils/request'

export function getReleasedMeetings(page = 1) {
  return request(`/tapi/user/search/${page}`, {
    method: 'post'
  })
}
