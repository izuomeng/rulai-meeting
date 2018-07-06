import request from '@/utils/request'

export function getRegisterList() {
  return request('/api/admin/registration/list?status=Pending')
}

export function updateConf({ confId, organizationStatus }) {
  return request(`/api/admin/registration/${confId}/handle`, {
    method: 'post',
    body: { organizationStatus, result: '' }
  })
}
