import request from '@/utils/request'

export function getPaperList({ confId, page = 1 }) {
  return request(`/api/organization/${confId}/paperlist/${page}`)
}

export function updatePaperStatus({ paperId, ...rest }) {
  return request(`/api/organization/setjudge/${paperId}`, {
    method: 'post',
    body: rest
  })
}
