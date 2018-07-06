import request from '@/utils/request'

export function deleteCollection() {
  return request(`/tapi/user/undo_collection/1`, {
    method: 'delete'
  })
}
