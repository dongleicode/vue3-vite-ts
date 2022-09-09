<script setup lang="ts">
const message:string = "<b style='color: red'>我是无敌的</b>"
const num:number = 0
const flag:boolean = true

</script>

<template>
 <div>
    <h1 v-show="flag" v-html="message"></h1>
 </div>
</template>

<style scoped>

</style>