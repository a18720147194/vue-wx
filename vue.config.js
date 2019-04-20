module.exports = {
  devServer: {
      port: 8080,
      proxy: {
          '/apis': {
              target: 'http://bl.7yue.pro', 
              ws: true, 
              changeOrigin: true,
              pathRewrite: {
                  '^/apis': ''
              }
          },
      }
  }
}
