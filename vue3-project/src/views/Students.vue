<template>
  <div class="about">
    <van-nav-bar
      title="学生列表"
      left-text=""
      right-text="新增"
      left-arrow
      @click-left="Utils.goPage('/my')"
      @click-right="Utils.goPage('/add')"
    />
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell @click="toStudentDetail(item.id)" v-for="item in list" :key="item.id" :title="item.id + item.name + item.score" />
    </van-list>
  </div>
</template>
  <script>
import { onMounted, onUnmounted, ref } from "vue";
import { List, Cell } from "vant";
import { toRefs, reactive, computed, getCurrentInstance } from "vue";
import { useGetters, useActions } from "../store/hooks";
import { studentsList, studentDetail } from "../serve/students";
export default {
  name: "students",
  components: {
    [List.name]: List,
    [Cell.name]: Cell,
  },
  props: {},
  setup(props) {
    const loading = ref(false);
    const finished = ref(false);
    const list = ref([]);

    let actions = useActions(["hideNav", "showNav"], "app");
    onMounted(() => {
      //用mapActions来触发
      actions.hideNav();
    });
    onUnmounted(() => {
      actions.showNav();
    });
    const getStudentsList = () => {
      studentsList().then((res) => {
        list.value = res.data;
        loading.value = true;
        finished.value = true;
      });
    };

    const onLoad = () => {
        getStudentsList()
    };

    const toStudentDetail = (str) => {
        Utils.goPage('/studentDetail', {id: str})
    }
    
    return {
      list,
      onLoad,
      loading,
      finished,
      toStudentDetail,
      Utils
    };
  },
};
</script>
  <style scoped>
</style>
  