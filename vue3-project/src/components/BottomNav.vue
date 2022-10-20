<template>
  <div class="nav-bottom">
    <router-link active-class="over" v-for="(item, index) in list" :key="index" :to="item.path">
      <i :class="'iconfont ' + item.icon"></i>
      <label>{{item.title}}</label>
    </router-link>
  </div>
</template>

<script>
import bottomNavData from '../api/bottomNavData'
import { toRefs, reactive } from 'vue';
export default {
  setup(){
    let data = reactive({
      list: bottomNavData
    })
    return {
      ...toRefs(data)
    }
  }
}
</script>

<style scoped>
.over{
  color: yellowgreen;
}
</style>
