import request from '@/utils/request'

export function getAllCollections(page = 1) {
  return request(`/api/user/collection_list/${page}`)
}

export function unstar(confId) {
  return request(`/api/user/undo_collection/${confId}`, { method: 'delete' })
}
