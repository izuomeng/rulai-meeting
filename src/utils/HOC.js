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
export function RestClient(request, options) {
  return function(MyComponent) {
    return class WrappedRestClient extends React.PureComponent {
      state = {
        loading: true,
        result: {}
      }
      componentDidMount() {
        this.fetch()
      }
      async fetch() {
        try {
          let reqArgs = options
          if (typeof options === 'function') {
            reqArgs = options(this.props)
          }
          const { data } = await request(reqArgs)
          this.setState({
            loading: false,
            result: data
          })
        } catch (error) {
          return
        }
      }
      render() {
        const { loading, result } = this.state
        if (!loading && !result) {
          return null
        }
        return (
          <MyComponent
            fetch={this.fetch}
            loading={loading}
            data={result}
            {...this.props}
          />
        )
      }
    }
  }
}
