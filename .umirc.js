const path = require('path')

export default {
  alias: {
    '@': path.resolve(__dirname, 'src'),
    CP: path.resolve(__dirname, 'src/components')
  },
  plugins: ['umi-plugin-dva'],
  theme: {
    '@primary-color': '#47C479'
  },
  proxy: {
    '/tapi': {
      target: 'http://rap2api.taobao.org/app/mock/18452/api',
      changeOrigin: true,
      pathRewrite: { '^/tapi': '' }
    },
    '/api': {
      target: 'http://140.143.208.38:8080/demo-0.0.1-SNAPSHOT',
      changeOrigin: true
    }
  }
}
