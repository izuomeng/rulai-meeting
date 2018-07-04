import request from '@/utils/request'

export function getLogin(data, isUser) {
  const api = isUser ? '/api/user/session' : '/api/organization/session'
  return request(api, {
    method: 'post',
    body: {
      userName: data.email,
      password: data.pwd
    }
  })
}
