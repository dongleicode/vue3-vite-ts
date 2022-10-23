<template>
  <div class="about">
    <van-nav-bar
      title="订单详情"
      left-text=""
      left-arrow
      @click-left="Utils.goBack();actions.showNav()"
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
  import { onMounted } from 'vue';
   import { Lazyload } from 'vant';
   import { toRefs, reactive, computed, getCurrentInstance   } from 'vue';
   import { useStates, useGetters, useActions } from '../store/hooks'
   import { useRouter, useRoute } from 'vue-router';
   export default {
     name: 'details',
     components:{
        [Lazyload.name]: Lazyload,
     },
     props: {
     },
     setup(props){
       const router = useRouter() //全局路由的实例，是VueRouter的实例
       const route = useRoute()
       //此种调用公共方法，生产有问题，需要挂载在window上
      //  const { appContext } = getCurrentInstance()
      //  const { $utils } = appContext.config.globalProperties
      let actions = useActions(['hideNav', 'showNav'], 'app')
      let orderDetail = useGetters(['orderDetail'], 'order').orderDetail
      onMounted(() => {
        //直接调用store
        // store.dispatch('hideNav');
        //用mapActions来触发
        actions.hideNav()   
      })
       const id = route.query.id
       let data = reactive({
         detail: computed(()=> orderDetail[id]),
       })
       return {
         ...toRefs(data),
         Utils,
         actions
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
