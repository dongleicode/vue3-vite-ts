const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    host: '127.0.0.1',
    port: '6688',
    open: true,
    headers:{
      'Access-Control-Allow-Origin':'*',
    },
    proxy: {
      '/students': {
          // secure: true, // 是否https接口
          // ws:false,// 是否代理websockets
          target:'http://127.0.0.1:7001/',
          changeOrigin: true,// 开发模式，默认的origin是真实的 origin:localhost:3000 代理服务会把origin修改为目标地址
          rewrite: (path) => path.replace(/^\/students/, '')
       },

    }
  }
})
