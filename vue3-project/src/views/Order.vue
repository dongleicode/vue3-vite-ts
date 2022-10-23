<template>
  <div class="detail">
    <van-nav-bar
      title="订单列表"
      left-text=""
      left-arrow
      @click-left="Utils.goPage('/home', {});store.dispatch('SHOWNAV');"
    />
    <Suspense>
      <!-- 插槽包裹异步组件 --> 
      <template #default>
        <List/>
      </template>
      <!-- 插槽包裹渲染异步组件之前的内容 -->
      <template #fallback>
        <List/>
      </template>
    </Suspense>
  </div>
</template>

<script>
import List from '../components/List.vue'
import { useRouter, useRoute } from 'vue-router';

export default {
  name: 'order',
  components:{
    List
  },
  setup(){
    const router = useRouter() //全局路由的实例，是VueRouter的实例
    const route = useRoute() //route表示当前的路由信息，包含了当前的URL解析得到的信息
    return {
      Utils
    }
  }
}
</script>
<style>
.van-card__content{
  text-align: left !important;
}
</style>
