<template>
  <div class="about">
    <van-nav-bar
      title="订单详情"
      left-text=""
      left-arrow
      @click-left="Utils.goBack();"
    />
    <img :src="detail.img" >
    <div class="text-cont">
      {{detail.name}}  
    </div>
    <div class="text-cont">
      价格：{{detail.price}}
    </div>
    <div class="text-cont">
      {{detail.desc}}
    </div>
  </div>
</template>
<script>
   import { Lazyload } from 'vant';
   import { toRefs, reactive, computed, getCurrentInstance   } from 'vue';
   import { useStore } from 'vuex'
   import { useRouter, useRoute } from 'vue-router';
   export default {
     name: 'details',
     components:{
        [Lazyload.name]: Lazyload,
     },
     props: {
     },
     setup(props){
       const store = useStore()
       const router = useRouter() //全局路由的实例，是VueRouter的实例
       const route = useRoute()
       //此种调用公共方法，生产有问题，需要挂载在window上
      //  const { appContext } = getCurrentInstance()
      //  const { $utils } = appContext.config.globalProperties
       const id = route.query.id
       let data = reactive({
         detail: computed(()=>store.getters.orderDetail[id]),
       })

       return {
         ...toRefs(data),
         Utils
       }
     }
   }
</script>
<style scoped>
  img{
    display: block;
    width: 100%;
  }
  .text-cont{
    text-indent: 30px;
    padding: 20px;
    line-height: 30px;
    text-align: justify;
  }
</style>
