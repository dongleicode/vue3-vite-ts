<template>
  <div class="home-main">
    <van-grid square :border="false" :column-num="2" :gutter="10">
      <van-grid-item
        v-for="(v, i) in lists"
        :key="i + new Date()"
      >
        <img style="margin-top: 20px;" :src="v.img" />
        <p class="discount">商品:{{ v.name }} </p>
        <p class="price-text">原价:{{ v.price }}</p>
      </van-grid-item>
    </van-grid>
    <ul>
      <li class="lists" v-for="(v, i) in lists" :key="i + new Date()">
        <a>
          <img :src="v.img" />
        </a>
        <label>
          <b class="discount">商品:{{ v.name }}</b>
          <span class="price-text">原价:{{ v.price }}</span>
        </label>
      </li>
    </ul>
  </div>
</template>
  
  <script>
import { Grid, GridItem } from "vant";
import { toRefs, reactive, inject } from "vue";
export default {
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
  },
  setup() {
    let data = reactive({
      lists: inject("list"),
    });
    return {
      ...toRefs(data),
    };
  },
};
</script>
  
<style scoped>
.home-main{
  padding-top: 10px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: #27bfd2;
}
.home-main img{
  display: block;
  width: 100%;
}

</style>
  