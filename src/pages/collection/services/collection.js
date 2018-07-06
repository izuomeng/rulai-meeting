import request from '@/utils/request'

export function getAllCollections(id = 1) {
  return request(`/tapi/user/collection_list/${id}`, {
    method: 'get'
  })
}
