import request from '@/utils/request'

export function getAllMeetings(page = 1) {
  return request(`/api/user/search/${page}`)
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

export function star(id) {
  return request(`/api/user/collection/${id}`)
}
