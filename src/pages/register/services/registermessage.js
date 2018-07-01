import request from '@/utils/request'

export function getRegister() {
  return request(`/api/user/registration`, {
    method: 'get',
    body: {
      email: '123@163.com',
      password: '123456'
    }
  })
}
