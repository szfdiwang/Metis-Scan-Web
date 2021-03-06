module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  productionSourceMap: process.env.NODE_ENV === 'development',
  filenameHashing: true,
  devServer: {
    port: 10000,
    open: true,
    proxy: {
      '/apis': {
        target: 'http://192.168.112.32:8088/', // 代理接口位置
        pathRewrite: {
          '^/apis': ''
        }
      }
    }
    // before: require('./mock/mock-server.js')
  }
}