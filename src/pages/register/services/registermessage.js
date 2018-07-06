import request from '@/utils/request'

export function RegisterUser(data) {
  return request(`/api/user/registration`, {
    method: 'post',
    body: {
      email: data.email,
      password: data.password
    }
  })
}

export function RegisterOrganization(data) {
  return request(`/api/organization/registration`, {
    method: 'post',
    body: {
      organizationName: data.name,
      creditCode: data.code,
      mail: data.mail,
      file: data.file
    }
  })
}
