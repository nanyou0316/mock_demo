module.exports = {
  devServer: {
    // 反向代理,api都一样用这种方法
    proxy: {
      '/api': {
        // 域名后面的第一个地址作为标识符
        target: 'http://59.110.226.77:3000',
        changeOrigin: true
      },
      // 配置参考网站的反向代理
      '/index.php': {
        target: 'http://qinqin.net',
        changeOrigin: true
      },
      '/ajax': {
        target: 'https://m.maoyan.com',
        changeOrigin: true
      }
    },
    before:require('./mock')
  },
}
