import request from '@/utils/request'

export default function changeContribution(data, paperId) {
  return request(`/api/user/repostpaper/${paperId}`, {
    method: 'post',
    body: data
  })
}
