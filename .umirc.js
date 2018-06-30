const path = require('path')

export default {
  alias: {
    '@': path.resolve(__dirname, 'src')
  },
  plugins: ['umi-plugin-dva'],
  theme: {
    '@primary-color': '#47C479'
  },
  proxy: {
    '/api': {
      target: 'http://rap2api.taobao.org/app/mock/18452',
      changeOrigin: true
    }
  }
}
