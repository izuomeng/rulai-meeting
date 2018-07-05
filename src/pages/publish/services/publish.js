import request from '@/utils/request'

export function publish(orgId, payload) {
  return request(`/api/organization/post/${orgId}`, {
    method: 'post',
    body: payload
  })
}
