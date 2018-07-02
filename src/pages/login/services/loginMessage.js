import request from '@/utils/request'

export function getLogin(data) {
  return request(`/api/user/session`, {
    method: 'post',
    body: {
      userName: data.email,
      password: data.pwd
    }
  })
}
