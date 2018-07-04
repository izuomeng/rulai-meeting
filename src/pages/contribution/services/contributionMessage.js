import request from '@/utils/request'

export default function getContribution() {
  return request(`/tapi/user/getjudge`, {
    method: 'get'
  })
}
