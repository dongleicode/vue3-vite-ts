<template>
  <div class="">
    <van-card
      v-for="(v, i) in lists"
      :key="i + new Date()"
      @click="Utils.goPage('/details', { id: i })"
      :num="v.id"
      :tag="v.discount"
      :price="v.price"
      :desc="v.name"
      :title="v.name"
      :thumb="v.img"
      :origin-price="v.price"
    />
  </div>
</template>
   
<script>
import { Card } from "vant";
import { toRefs, reactive, computed, getCurrentInstance } from "vue";
import { useStates } from "../store/hooks";
export default {
  components: {
    [Card.name]: Card,
  },
  setup() {
    // const store = useStore();
    //    const router = useRouter() //全局路由的实例，是VueRouter的实例
    //    const { appContext, proxy } = getCurrentInstance()
    //    const { $utils } = appContext.config.globalProperties
    
    let data = reactive({
      lists: useStates(['orderList'], 'order').orderList,
    });
    return {
      ...toRefs(data),
      Utils
    };
  },
};
</script>
   
<style scoped>
</style>
   