<template>
     <router-view />
     <BottomNav />
</template>
<script>
    import BottomNav from '@/components/BottomNav.vue'
    export default{
      components:{
        BottomNav
      }
    }
      
</script>

<style scoped>
@import './assets/css/index.css'
</style>