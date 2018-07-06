import request from '@/utils/request'

export function deleteCollection() {
  return request(`/api/user/undo_collection/1`, {
    method: 'delete'
  })
}
