import request from '@/utils/request'

//获取会议信息
export function getMeetingsByID(id) {
  return request(`/tapi/user/conference/1`)
}

//在线提交论文
export function submitOnline(data, id, file) {
  const api = `/api/user/contribute/1`
  return request(api, {
    method: 'post',
    body: {
      id,
      file,
      ...data
    }
  })
}
