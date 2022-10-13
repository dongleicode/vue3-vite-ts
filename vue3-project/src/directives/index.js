import { h } from 'vue'

const vNode = (msg) => {
  // alert(typeof msg)
  return h('div', {id: 'main', style: {color: 'lightblue', fontSize: '20px', textAlign: 'left'}}, msg)
}
const ElMessage = {
  error: function(msg){
    // const dom = `<p style="position: fixed: left: 50%; top: 50%; border: 1px solid #ccc; background: lightblue; color: #222;">${msg}</p>`

    const dom = vNode(msg)

    console.log(dom);
    
    setTimeout(function(){
      // console.log(document.body);
      //   document.querySelector('#app').appendChild(dom)
      console.log(msg)
    }, 1000)
    
  }
}

const addListener = function (el, type, fn) {
  el.addEventListener(type, fn, false)
}
const directives = function (Vue) {
  Vue.directive('copy', {
    beforeMount(el, binding) {
      el.targetContent = binding.value;
      el.addEventListener('click', () => {
        if(!el.targetContent) return console.warn('没有需要复制的目标内容');
        // 创建textarea标签
        const textarea = document.createElement('textarea');
        // 设置相关属性
        textarea.readOnly = 'readonly';
        textarea.style.position = 'fixed';
        textarea.style.top = '-99999px';
        // 把目标内容赋值给它的value属性
        textarea.value = el.targetContent;
        // 插入到页面
        document.body.appendChild(textarea);
        // 调用onselect()方法
        textarea.select();
        // 把目标内容复制进剪贴板, 该API会返回一个Boolean
        const res = document.execCommand('Copy');
        res && console.log('复制成功，剪贴板内容：' + el.targetContent);
        // 移除textarea标签
        document.body.removeChild(textarea);
      })
    }, 
    updated(el, binding) {
      // 实时更新最新的目标内容
      el.targetContent = binding.value;
    },
    unmounted(el) {  
      el.removeEventListener('click', ()=>{})
    }
  })

// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  mounted(el) {
    // 聚焦元素
    el.focus()  // 页面加载完成之后自动让输入框获取到焦点的小功能
  }
})

// 注册一个全局自定义指令 `v-focus`
Vue.directive('number', {
  beforeMount(el, binding) {
    el.targetContent = binding.value;
    addListener(el, 'keyup', () => {
      el.value = el.value.replace(/\D/g, '')
      ElMessage.error('格式不对')
    })
  }, 
  updated(el, binding) {
    // 实时更新最新的目标内容
    el.targetContent = binding.value;
  },
  unmounted(el) {  
    el.removeEventListener('keyup', ()=>{})
  }
})

}
export default directives