export default {
  plugins: ['umi-plugin-dva'],
  theme: {
    '@primary-color': '#47C479'
  },
  proxy: {
    '/api': {
      target: 'http://jsonplaceholder.typicode.com/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' }
    }
  }
}
