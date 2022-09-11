import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// *********************************** 路径配置新增 start  
import { resolve } from 'path'     
import DefineOptions from 'unplugin-vue-define-options/vite';

const pathResolve = (dir: string): any => {  
  return resolve(__dirname, ".", dir)          
}
 
const alias: Record<string, string> = {
  '@': pathResolve("src")
}


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), DefineOptions()],
  resolve: {
    alias
  },
})
