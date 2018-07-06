import request from '@/utils/request'

export function getAllMeetings(page = 1) {
  return request(`/api/user/search/${page}`)
}

export function registerMeetings(body) {
  return request(`/api/user/conference/join/registration`, {
    method: 'post',
    body
  })
}

export function star(id) {
  return request(`/api/user/collection/${id}`)
}
