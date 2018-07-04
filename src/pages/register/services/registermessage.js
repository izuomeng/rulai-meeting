import request from '@/utils/request'

export function getRegister(data) {
  return request(`/tapi/user/registration`, {
    method: 'post',
    body: {
      email: data.email,
      password: data.pwd
    }
  })
}
