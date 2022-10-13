<template>
  <div class="about">
    <h1>Find</h1>
    {{dom1}}
  </div>
</template>
<script>
  import { h, defineComponent, render } from 'vue'

  export default{
    name: 'find',
    setup(){
      console.log(this);  //undefined
      let data = {
        age: 35,
        name: '程序猿'
      }
      
      const dom1 = () => {
        return h('div', {id: 'main', style: {color: 'lightblue', fontSize: '20px', textAlign: 'left'}}, [
          h('ul', {class: 'main-li'}, [
            h('li', {class: 'main-li'}, [
              h('span', {class: 'main-span'}, '列表1')
            ]),
            h('li', {class: 'main-li'}, [
              h('span', {class: 'main-span'}, '列表2')
            ]), 
            h('li', {class: 'main-li'}, [
              h('span', {class: 'main-span'}, '列表3')
            ])
          ])
        ])
      }

      return dom1
    }
  }
</script>
