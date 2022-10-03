import {getCurrentInstance} from 'vue'
const { $myLoading } = getCurrentInstance().appContext.config.globalProperties
console.log($myLoading);

$myLoading.open()

setTimeout(() => {
   $myLoading.hide()
},2000)