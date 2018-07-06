import request from '@/utils/request'

export function getReleasedMeetings({ page = 1, orgId }) {
  return request(`/api/user/search/${page}`, {
    method: 'get',
    body: {
      organizationId: orgId
    }
  })
}

export function getMeetingInfo(id) {
  return request(`/api/user/conference/${id}`)
}

export function updateMeeting(id, body) {
  return request(`/api/organization/change_conference/${id}`, {
    method: 'post',
    body
  })
}

export function removeMeeting(id) {
  return request(`/api/organization/conference?conference_id=${id}`, {
    method: 'delete'
  })
}
