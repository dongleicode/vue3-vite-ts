<template>

   <ol>
      <li @click="toBase()">base</li>
      <!-- <router-link to="/base">base</router-link> -->
      <li @click="toRef()">ref</li>
   </ol>

</template>
<script setup lang='ts'>
   import { useRouter } from 'vue-router'
   const router = useRouter();
   const toBase = () => {
       router.push('/base')
   }
   const toRef = () => {
      router.push('/ref')       
   }

</script>
<style scoped>

</style>