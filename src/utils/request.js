import fetch from 'dva/fetch'
import router from 'umi/router' // eslint-disable-line
import { message } from 'antd'
import { transQuery } from '@/utils'
import { isEnumerable } from './index'
// import Cookies from 'js-cookie'
// import { SESSION_KEY } from '@/constants'

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
      message.error('请先登陆')
      return Promise.reject({ code: data.errorCode })
    }
    message.error(`${data.errorInfo || '操作失败'}(${data.errorCode})`)
    return Promise.reject({ code: data.errorCode })
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
export default function request(url, op = {}) {
  // 设置默认options
  const options = {
    ...op,
    credentials: 'same-origin'
  }
  let finalUrl = url
  // 如果是get请求，把body转换到url中
  if (
    options &&
    (options.method === 'get' || options.method === 'undefined') &&
    options.body
  ) {
    finalUrl = `${url}?${transQuery(options.body)}`
    delete options.body
  }
  // 把body对象转成json
  if (options && options.body && isEnumerable(options.body)) {
    options.body = JSON.stringify(options.body)
  }
  // 加入session请求头
  // const sesstionCookie = Cookies.get(SESSION_KEY)
  // if (sesstionCookie) {
  //   options.headers = {
  //     ...options.headers,
  //     Cookie: `${SESSION_KEY}=${sesstionCookie}`
  //   }
  // }
  // 设置请求头
  if (options && options.body) {
    options.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    }
  }
  return fetch(finalUrl, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(handleRes)
    .catch(err => {
      console.log(err)
      return Promise.reject(err)
    })
}
