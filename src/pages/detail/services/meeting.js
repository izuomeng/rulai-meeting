import request from '@/utils/request'

//获取会议信息
export function getMeetingsByID(id) {
  return request(`/api/user/conference/${id}`)
}

//在线提交论文
export function submitOnline(data, id, file) {
  const api = `/api/user/contribute/${id}`
  return request(api, {
    method: 'post',
    body: {
      file,
      ...data
    }
  })
}
