import request from '@/utils/request'

//获取会议信息
export function getMeetingsByID(id) {
  return request(`/tapi/user/conference/1`)
}

//在线提交论文
export function submitOnline(data, id) {
  const api = `/api/user/contribute/1`
  return request(api, {
    method: 'post',
    body: {
      id: id,
      title: data.title,
      abstractInfo: data.abstractInfo,
      file: data.file
    }
  })
}

//修改用户信息
export function modifyUserInfo() {
  const api = `/api/user/info/modify`
}
