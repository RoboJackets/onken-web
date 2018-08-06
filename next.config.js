const withLess = require('@zeit/next-less')
const webpack = require('webpack')
module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  webpack: (config) => {
    config.plugins.push(new webpack.IgnorePlugin(/^raven$/));
    return config;
  },
})