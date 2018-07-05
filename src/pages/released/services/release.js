import request from '@/utils/request'

export function getReleasedMeetings({ page = 1, orgId }) {
  return request(`/api/user/search/${page}`, {
    method: 'post',
    body: {
      organizationId: orgId
    }
  })
}
export function modifyMeeting(data) {
  return request('api/organization/change_conference/1', {
    method: 'post',
    body: data
  })
}
export function getMeeting(data) {
  return request('api/user/conference/1', {
    method: 'get'
  })
}
