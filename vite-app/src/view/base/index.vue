<script setup lang="ts">
import {getCurrentInstance} from 'vue'
const { $myLoading } = getCurrentInstance().appContext.config.globalProperties
console.log($myLoading);

$myLoading.open()

setTimeout(() => {
   $myLoading.hide()
},2000)
   //抛出组件name，路由路径，可不写
   //  defineOptions({
   //      name: 'base'
   //  })
    import DiffAlgorithm from '../../components/DiffAlgorithm.vue'
   

    const num:number = 0
    const flag:boolean = true
    const parent = ()=>{
          console.log('parent')
       }
    const child = ()=>{
       console.log('child')
    }
 
    type Style = {
       color: string,
       height: string
    }
    const style:Style = {
       color: 'red',
       height: '50px'
    }
 
    type Cls = {
       a: boolean,
       b: boolean
    }
 
    const cls:Cls={
       a: true,
       b: false
    }
 
 
    const arr:Array<number> = [1, 2, 3, 4]
    const arr1:Array<any> = [{name: 1}, {name: 2}, {name: 3}]
 
    import { defineAsyncComponent, ref } from 'vue'
    const msg = ref('test')
 
 </script>
 
 <template>
    
    <h3>diff算法：</h3>
    <DiffAlgorithm />
    <form action="/">
       <button @click.prevent="child" type="submit">提交</button>
    </form>
     <h1 v-bind:style="style" @click="parent()">
       父级
       <button :class="[flag ? 'a' : 'b']" @click.stop="child()">你好</button>
    </h1>
    <h2 :class="cls">样式</h2>
    <ul>
       <li :key="item" v-for="item in arr">{{item}}</li>
    </ul>
    <ul>
       <li :key="item" v-for="item in arr1">name:{{item.name}}</li>
    </ul>
 
    <h3>双向数据绑定：</h3>
    <input type="text" v-model="msg">
    <p>{{msg}}</p>
 
 </template>
 
 <style scoped>
    .a {
       color: blue;
    }
    .b{
       color: yellow;
    }
 </style>