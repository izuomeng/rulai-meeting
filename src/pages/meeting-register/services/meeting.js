import request from '@/utils/request'

export function getPaticipants({ confId, page = 1 }) {
  return request(`/api/organization/entrylist/${confId}/${page}`)
}

export function updateStatus({ entryId, handleStatus }) {
  return request(`/api/organization/parthandle/${entryId}`, {
    method: 'post',
    body: { handleStatus }
  })
}
