import myLoading from './lib/loading.vue'
import { createVNode, render, VNode, App} from 'vue'

export default {
    install(app: App){
        const vnode:VNode = createVNode(myLoading)
        render(vnode, document.body)
        app.config.globalProperties.$myLoading = {
            open: () => { vnode.component?.exposed?.open() },
            hide: () => { vnode.component?.exposed?.hide() }
        }
    }
}







/***
 * 
vue2
export default {
    //第一个参数：vue构造器
    //第二个参数：可选插件参数
    install(Vue, options){
        console.log(Vue);
        
        const Loading = Vue.extend(myLoading)
        const Profile = new Loading({
            el: document.createElement('div')
        })
        document.body.appendChild(Profile.$el)

        if(options){
            // if(options.text){
            //     Profile.text = options.text
            // }
        }

        const myLoadingMethod = {
            open(text){
                Profile.show = true;
                if(text){
                    Profile.text = text
                }
            },
            hide(){
                Profile.show = false
            }
        }

        Vue.prototype.$myLoading = myLoadingMethod
    }
}

 */

