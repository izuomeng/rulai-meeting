import request from '@/utils/request'

export function deleteCollection(page = 1) {
  return request(`/undo_collection/${page}`, {
    method: 'delete'
  })
}
