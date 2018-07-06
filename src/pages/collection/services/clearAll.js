import request from '@/utils/request'

export function clearAllCollection() {
  return request(`/tapi/user/clear_collection`, {
    method: 'delete'
  })
}
