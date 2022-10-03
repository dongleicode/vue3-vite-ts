import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import './style.css'

// import myLoading from './components/loading/index'
import myLoading from './plugins/index'

type Lod = {
  open: () => void,
  hide: () => void
}
const app = createApp(App)
app.use(Antd)
app.use(router)
app.use(myLoading)

declare module '@vue/runtime-core'{
  export interface ComponentCustomProperties{
    $myLoading: Lod
  }
}


app.mount('#app')

if (/Android|webOS|iPhone|iPod|BlackBerry|iPad/i.test(navigator.userAgent)) {
    var oMeta = document.createElement('meta');
    oMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0, user-scalable=0';
    oMeta.name = 'viewport';
    document.getElementsByTagName('head')[0].appendChild(oMeta);
  }
  
