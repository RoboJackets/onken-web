const withLess = require('@zeit/next-less')
module.exports = withLess({
  cssModules: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  }
})