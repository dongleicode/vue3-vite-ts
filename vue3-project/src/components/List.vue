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
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  components: {
    [Card.name]: Card,
  },
  setup() {
    const store = useStore();
    //    const router = useRouter() //全局路由的实例，是VueRouter的实例
    //    const { appContext, proxy } = getCurrentInstance()
    //    const { $utils } = appContext.config.globalProperties

    // const goDetail = (i) => {
    //   router.push({
    //       path: '/details',
    //       query: {id: i}
    //   })
    //   router.push({
    //       name: 'details',
    //       params: {id: i}
    //   })
    // };
    let data = reactive({
      lists: computed(() => store.getters.orderList),
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
   