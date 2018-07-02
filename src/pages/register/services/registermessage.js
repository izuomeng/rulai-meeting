import request from '@/utils/request'

export function getRegister(data) {
  return request(`/api/user/registration`, {
    method: 'get',
    body: {
      email: data.email,
      password: data.pwd
    }
  })
}
