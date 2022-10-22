import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, NavBar, Toast,Notify,Dialog } from 'vant'
import 'vant/lib/index.css';
import './assets/font/iconfont.css'
import utils from './utils/common'
// 引入全局自定义事件
import directives from '@/directives'

const app = createApp(App)

app.use(directives)
app.use(store)
app.use(router)
app.use(utils)
app.use(Button)
app.use(NavBar)
app.use(Toast)
app.use(Notify)
app.use(Dialog)
app.mount('#app')

window.Utils = utils
window.Van = {
    Toast,
    Notify,
    Dialog
}
