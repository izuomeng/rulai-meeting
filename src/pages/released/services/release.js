import request from '@/utils/request'

export function getReleasedMeetings(page = 1) {
  return request(`/tapi/user/search/${page}`, {
    method: 'post'
  })
}
export function modifyMeeting(data) {
  return request('api/organization/change_conference/1', {
    method: 'post',
    body: data
  })
}
