import request from '@/utils/request'

export function getAllMeetings(page = 1) {
  return request(`/tapi/user/search/${page}`, {
    method: 'post'
  })
}

export function registerMeetings(data) {
  return request(`/api/user/conference/join/registration`, {
    method: 'post',
    body: {
      conferenceID: 1,
      ...data
    }
  })
}
