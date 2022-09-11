<template>

   <!-- <ol>
      <li @click="toBase">base</li>
      <li @click="toRef">ref</li>
   </ol> -->
   <router-link to="/base">base</router-link>
   <p></p>
   <router-link to="/ref">ref</router-link>
   <p></p>
   <router-view></router-view>

</template>
<script setup lang='ts'>
   defineOptions({
        name: 'home'
    })
   import { useRouter } from 'vue-router'
   const router = useRouter();
   const toBase = () => {
       router.push({path: '/base'})
   }
   const toRef = () => {
      router.push('/ref')  
   }

   console.log(router.options.routes)

</script>
<style scoped>
   .hide{
      display:none;
   }
</style>