import request from '@/utils/request'

export function getReleasedMeetings(page = 1) {
  return request(`/api/user/search/${page}`, {
    method: 'post'
  })
}
