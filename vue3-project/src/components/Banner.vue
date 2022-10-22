<template>
  <div class="banner">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="v in list" :key="v">
        <img :src="v.img" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
  
<script>
import { Swipe, SwipeItem } from "vant";
import { toRefs, reactive, inject } from "vue";
export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  setup() {
    let data = reactive({
      n: 1,
      list: inject("list"),
    });
    return {
      ...toRefs(data),
    };
  },
};
</script>
  
  <style scoped>
</style>
  