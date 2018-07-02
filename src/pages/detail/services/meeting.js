import request from '@/utils/request'

export function getMeetingsByID(id) {
  return request(`/tapi/user/conference/1`)
}

// export function getPaperSample(){

// }
