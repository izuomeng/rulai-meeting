import React from 'react'

/**
 * 封装组件，传入className
 * @param {Object} MyComponent 要封装的组件
 * @returns {Function} 目标组件
 */
export const InjectClass = MyComponent => ({ className, ...others }) => (
  <MyComponent {...others} className={className} />
)

/**
 * 高阶组件，传入请求参数后渲染时将自动发出请求，并把loading和data传给包裹的子组件
 * @param {Function} request 请求函数，返回一个promise对象
 * @param {Array} args 请求函数的参数
 * @returns {Function} 高阶组件
 */
export function RestClient(request, ...args) {
  return function(MyComponent) {
    return class WrappedRestClient extends React.PureComponent {
      state = {
        loading: true,
        result: {}
      }
      async componentDidMount() {
        const { data } = await request(...args)
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
