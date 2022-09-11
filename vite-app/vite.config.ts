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
})
