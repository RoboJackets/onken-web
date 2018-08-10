const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({
  dir: '.',
  dev,
})

const devProxy = {
  '/api': {
    target: 'http://onken.local:8000/api/', //Set to match your local Onken config
    pathRewrite: { '^/api': '/' },
    changeOrigin: true
  }
}

const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    if (dev) {
      const proxyMiddleware = require('http-proxy-middleware')
      Object.keys(devProxy).forEach(context => (
        server.use(proxyMiddleware(context, devProxy[context]))
      ))
    }

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
    })
  })
  .catch(() => process.exit(1))