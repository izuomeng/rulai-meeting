import fetch from 'dva/fetch'
import router from 'umi/router'
import { message } from 'antd'
import { isEnumerable } from './index'

function parseJSON(response) {
  return response.json()
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const error = new Error(response.statusText)
  error.response = response
  throw error
}

function handleRes(data) {
  if (data && data.errorCode) {
    if (data.errorCode === 100) {
      router.push('/login')
      message.error('认证失败，请重新登陆')
      return Promise.reject(data.errorCode)
    }
    message.error(`${data.errorInfo || '操作失败'}(${data.errorCode})`)
    return Promise.reject(data.errorCode)
  }
  return { data }
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  if (options && options.body && isEnumerable(options.body)) {
    options.body = JSON.stringify(options.body)
  }
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(handleRes)
    .catch(err => {
      console.log(err)
      return Promise.reject(err)
    })
}
