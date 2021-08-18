const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

// const host = 'http://localhost:8088'
// const host = 'http://8.129.60.92:8088'

module.exports = {
  // devServer: {
  //   port: 9000,
  //   proxy: {
  //     '/api': {
  //       target: host,
  //       changeOrigin: true,
  //     },
  //   },
  // },
  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('src'))
  },
}
