<template>
  <router-view />
  <BottomNav v-show="isShowNav" />
</template>
<script>
import { reactive, computed, toRefs } from "vue";
import { useStates } from "./store/hooks";
import BottomNav from "@/components/BottomNav.vue";
export default {
  components: {
    BottomNav,
  },
  setup() {
    const data = reactive({
      isShowNav: computed(()=> useStates(['isShowNav'], 'app').isShowNav)
    });
    return {
      ...toRefs(data),
    };
  },
};
</script>

<style scoped>
@import "./assets/css/index.css";
</style>