import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/font/iconfont.css'
// 引入全局自定义事件
import directives from '@/directives'
const app = createApp(App)

app.use(directives)
app.use(store)
app.use(router)
app.mount('#app')
