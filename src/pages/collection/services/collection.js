import request from '@/utils/request'

export function getAllCollections() {
  return request(`/api/user/collection_list/1`, {
    method: 'get'
  })
}
