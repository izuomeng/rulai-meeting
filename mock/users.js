import Mock from 'mockjs'

export default {
  'get /api/login': {
    token: Mock.mock('@word(32)')
  }
}
