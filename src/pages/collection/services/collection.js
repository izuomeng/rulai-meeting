import request from '@/utils/request'

export function getAllCollections(page = 1) {
  return request(`/api/user/search/${page}`, {
    method: 'post'
  })
}
