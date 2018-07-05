import request from '@/utils/request'

export default function getContribution() {
  return request(`/api/user/getjudge`, {
    method: 'get'
  })
}
