import request from '@/utils/request'

export function getAccountList({ id: organizationID, page = 1 }) {
  return request(`/api/organization/accountList/${organizationID}/${page}`, {
    method: 'get'
  })
}

export function removeAccount(id) {
  return request(`/api/organization/account/delete?id=${id}`, {
    method: 'post'
  })
}
export function addAccount(data) {
  return request(`/api/organization/account/add`, {
    method: 'post',
    body: {
      userName: data.name,
      password: data.pwd
    }
  })
}
