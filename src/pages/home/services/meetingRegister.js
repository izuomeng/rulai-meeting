import request from '@/utils/request'

export default function registerMeetings(data) {
  return request(`/tapi/user/conference/join/registration`, {
    method: 'post',
    body: {
      conferenceID: 1,
      joinConferenceGroup: data,
      feeImages: {}
    }
  })
}
