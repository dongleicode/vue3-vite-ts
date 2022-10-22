<template>
  <div class="home">
    <van-nav-bar
      title="首页"
    />
    <Banner/>
    <!-- 
      1.Suspense组件用于在等待某个异步组件解析时显示后备内容
      2.何时使用它?
        1、在页面加载之前显示加载动画
        2、显示占位符内容
        3、处理延迟加载的图像
      3.如何使用 
       插槽包裹异步组件
        <Suspense>
            <template #default>
                <Async/>
            </template>
        </Suspense> 
        具名插槽的缩写是在 vue2.6.0 新增，跟 v-on 和 v-bind 一样，v-slot 也有缩写， 替换为字符 #。
        例如 v-slot:header 可以被重写为 #header


        插槽包裹渲染异步组件之前的内容
        <Suspense>
            <template #fallback>
                <h1>Loading...</h1>
            </template>
        </Suspense> 

     -->
    <Suspense>
      <!-- 插槽包裹异步组件 --> 
      <template #default>
        <List1/>
      </template>
      <!-- 插槽包裹渲染异步组件之前的内容 -->
      <template #fallback>
        <List/>
      </template>
    </Suspense>
    <!-- <List/> -->
    <!-- <div>定时器；{{count}}</div>
    <div>{{age}}----{{n1}}----{{n2}}---{{type}}---{{num}}</div>
    <button @click="change()">change</button>
    <br/>
    <input v-focus v-number placeholder="请输入" type="text" v-model='phone'>
    <button v-copy:[success]="phone">点击复制</button>
    <br/>
    v-number:<input v-number placeholder="请输入" type="text" v-model='num'> -->


  </div>
</template>

<script>
  import Banner from '../components/Banner.vue'
  import List1 from '../components/List1.vue'

  import { reactive, onMounted, toRefs, computed, watch, onUpdated, onUnmounted, provide} from 'vue';
  import { useStore } from 'vuex'
  export default{
    components:{
      Banner,
      List1,
    },
    name: 'home',
    // props: {
    //   item: 'Bill'
    // },
    setup (props){    
      const store = useStore()    
      let state = reactive({
        phone: '',
        name: 'vue3',
        num: '',
        count: 1,
        age: 0,
        id: 5,
        type: '偶数',
        n1: computed(()=> state.id + 1),
        n2: computed(function(){
            return state.id + 2
        }), 
        num: 0,
        list: computed(()=>store.getters.orderList)
      })

      provide('list', state.list)
      
      // onMounted(() => {
      //     setInterval(() => {
      //       if(state.count < 20){
      //         state.count +=1
      //       }
      //       // console.log(state.count);
      //     }, 1000)
      // })
      const stopWatch = watch(()=>state.age, (cur, pre)=>{
        console.log(cur, pre);
        if(cur%2 == 0){
          state.type = '偶数'
        }else{
          state.type = '奇数'
        }
      })

      const methods = {
        timer: null,
        change(){
          state.age +=1
          if(state.age == 6){
            //清除watch监听
            stopWatch()
          }
        },
        autoPlay(){
          state.num++
          if(state.num === 6){
            state.num = 0
          }
        },
        play(){
          this.timer = setInterval(this.autoPlay, 1000)
        },
        watchType(){
          if(state.num%2 == 0){
            state.type = '偶数'
          }else{
            state.type = '奇数'
          }
        },
        success(msg){
          console.log(msg);
          
          // alert(msg)
        }
        
      }

      onMounted(() => {
          methods.play()
      })

      onUpdated(() => {
          methods.watchType()
      })

      onUnmounted(() => {
          clearInterval(methods.timer)
      })

      return {
        ...toRefs(state),//将reactive创建出来的对象转化为ref形式的响应式数据
        ...methods
      }
    }
  }

</script>
