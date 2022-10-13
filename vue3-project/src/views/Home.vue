<template>
  <div class="home">
    <div>定时器；{{count}}</div>
    <div>{{age}}----{{n1}}----{{n2}}---{{type}}---{{num}}</div>
    <button @click="change()">change</button>
    <br/>
    <input v-focus v-number placeholder="请输入" type="text" v-model='phone'>
    <button v-copy:[success]="phone">点击复制</button>
    <br/>
    v-number:<input v-number placeholder="请输入" type="text" v-model='num'>




  </div>
</template>

<script>
  import { reactive, onMounted, toRefs, computed, watch, onUpdated, onUnmounted} from 'vue';
  export default{
    name: 'home',
    // props: {
    //   item: 'Bill'
    // },
    setup (props){        
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
        num: 0
      })
      
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
