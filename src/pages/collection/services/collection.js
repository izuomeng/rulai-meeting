import request from '@/utils/request'

export function getAllCollections() {
  return request(`/collection`, {
    method: 'get'
  })
}
