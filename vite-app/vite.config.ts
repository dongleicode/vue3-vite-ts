import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// *********************************** 路径配置新增 start  
import { resolve } from 'path'     
import DefineOptions from 'unplugin-vue-define-options/vite';
import {
  AntDesignVueResolver,
  // ElementPlusResolver,
  // VantResolver,
} from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

const pathResolve = (dir: string): any => {  
  return resolve(__dirname, ".", dir)          
}
 
const alias: Record<string, string> = {
  '@': pathResolve("src")
}


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    DefineOptions(),
    Components({
      dirs: ['src/components', 'src/view'], // 配置需要默认导入的自定义组件文件夹，该文件夹下的所有组件都会自动 import
      resolvers: [AntDesignVueResolver({             importStyle: false, 
        resolveIcons: true 
      })]
    })
  ],
  resolve: {
    alias
  },
  server:{
    host:'0.0.0.0',
    open: true
  },
  build: {
    lib: {
      // 入口指向组件库入口模块
        entry: resolve(__dirname, './src/plugins/index.ts'),
        name: 'vv3-dl-load',
        // 构建生成的文件名，与package.json中配置一致
        fileName: 'vv3-dl-load'
    },
    rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ['vue'],
        output: {
            globals: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                vue: 'Vue'
            }
        }
    }
}
})
