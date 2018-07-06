import request from '@/utils/request'

export function getUserInfo() {
  return request(`/api/user/session/info`)
}

//修改用户信息
export function modifyUserInfo(data) {
  return request(`/api/user/info/modify`, {
    method: 'post',
    body: {
      ...data
    }
  })
}
