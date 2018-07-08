const express = require('express')
const path = require('path')
const proxyMid = require('http-proxy-middleware')

const app = express()
const proxyConfig1 = {
  target: 'http://140.143.208.38:8080/demo-0.0.1-SNAPSHOT',
  changeOrigin: true
}
const proxyConfig2 = {
  target: 'http://rap2api.taobao.org/app/mock/18452/api',
  changeOrigin: true,
  pathRewrite: { '^/tapi': '' }
}
const proxyConfig3 = {
  target: 'http://140.143.208.38:8080/demo-0.0.1-SNAPSHOT',
  changeOrigin: true,
  pathRewrite: { '^/dapi': '' }
}

app.use(express.static(path.resolve(__dirname, 'dist')))
app.use('/api', proxyMid(proxyConfig1))
app.use('/tapi', proxyMid(proxyConfig2))
app.use('/dapi', proxyMid(proxyConfig3))

const list = [
  '/home',
  '/account',
  '/admin',
  '/collection',
  '/contribution',
  '/info',
  '/login',
  '/publish',
  '/register',
  '/released',
  '/meeting-register/:id',
  '/detail/:id',
  '/papers/:id'
]
list.forEach(element => {
  app.get(element, (req, res) => {
    const options = {
      root: __dirname + '/dist/',
      dotfiles: 'deny',
      headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
      }
    }
    res.sendFile('index.html', options, function(err) {
      if (err) {
        console.log(err)
        res.status(err.status).end()
      }
    })
  })
})

app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  res.end(err)
})

app.listen(8000)
