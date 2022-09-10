<script setup lang="ts">
const Arr:Array<string> = ['a', 'b', 'c', 'd']
Arr.splice(2, 0, 'ddd')
</script>

<template>
  <ol>
    <li :key="item" v-for="item in Arr">{{item}}</li>
  </ol>
</template>

<style scoped>
*{
  list-style: none;
}
</style>
