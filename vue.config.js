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
        target: 'http://10.10.8.183:8787/',
        changeOrigin: true,
        pathRewrite: {
          '^/apis': ''
        }
      }
    }
    // before: require('./mock/mock-server.js')
  }
}
