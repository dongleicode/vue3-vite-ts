const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    host: 'localhost',
    port: '6688',
    open: true
  },
})
