import React from 'React'
import miment from 'miment'

/**
 * 判断obj参数是否是可以正确枚举的对象
 * 主要是为了排除form-data对象产生的异常现象
 * @param {object|Array} obj 要判断的元素
 * @returns {bool}
 */
export function isEnumerable(obj) {
  if (Array.isArray(obj)) {
    return true
  }
  return Object.prototype.toString.call(obj) === '[object Object]'
}

export function transTime(time) {
  return miment(time).format('YYYY-MM-DD')
}

export async function RestClient(request, ...args) {
  return function(MyComponent) {
    return class WrappedRestClient {
      state = {
        loading: true,
        result: {}
      }
      async componentDidMount() {
        const res = await request(...args)
        const data = res.json()
        this.setState({
          loading: false,
          result: data
        })
      }
      render() {
        const { loading, result } = this.state
        return <MyComponent loading={loading} data={result} {...this.props} />
      }
    }
  }
}
