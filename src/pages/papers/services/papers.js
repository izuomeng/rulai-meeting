import request from '@/utils/request'

export function getPaperList(page = 1) {
  return request(`/api/user/search/${page}`, {
    method: 'post'
  })
}
