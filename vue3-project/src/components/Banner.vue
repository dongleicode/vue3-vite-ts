<template>
    <div class="banner">
      <img v-for="(v,i) in list" :src="v" :key="i" v-show="i==n" alt="">
    </div>
  </template>
  
  <script>
  import { toRefs, reactive, inject } from 'vue';
  export default {
    setup(){
      let data = reactive({
        n: 1,
        list: inject('list')
      })
      return {
        ...toRefs(data)
      }
    }
  }
  </script>
  
  <style scoped>

  </style>
  