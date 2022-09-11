<template>
    <div>shallowRef:{{Man2}}</div>
    <div>ref:{{Man}}</div>
    <div>customRef: {{obj}}</div>
    <hr>
    <div ref="dom">我是dom</div>
    <button @click="change">修改</button>
    <hr>

    <form>
        <input type="text" v-model="form.name">
        <hr>
        <input type="text" v-model="form.age">
        <hr>
        <button @click.prevent="submit">提交</button>
    </form>
    <hr>
    <ol>
        <li v-for="item in list.arr">{{item}}</li>
    </ol>
    <hr>
    <button @click="add">增加</button>
    <hr>
    <div>shallowReactive： {{obj2}}</div>
    <hr>
    <button @click="edit">修改</button>
    <!-- 
        ! 1、ref相关的方法属性：isRef shallowRef customRef  triggerRef
        ! 2、reactive 与 ref的区别：
            * 2.1 ref支持所有的类型；reactive只支持引用类型：Array Object Map Set
            * 2.2 ref取值、赋值都需要加.value; reactive不需要加.value
            ! 2.3 reactive proxy不能直接赋值，否则破坏响应式对象
                * 解决方法1：数组可以用push + 解构
                * 解决方法2：添加一个对象，把数组作为一个属性去解决

        ! 3、reactive shallowReactive不能同时写在一起

     -->
</template>
<script setup lang="ts">
import { argumentPlaceholder } from '@babel/types';
    //可写可不写
    // defineOptions({
    //     name: 'refpage'
    // })
    import { ref, isRef, shallowRef, triggerRef, customRef, reactive, shallowReactive} from 'vue'
    //ref 深层次
    //shallowRef: 浅层次的响应
    const Man = ref({name: '小曼'})
    const Man2 = shallowRef({name: '莲蓉'})
    let form = reactive({
        name: '董雷',
        age: 35
    })
    // let list = reactive<string[]>([])
    let list = reactive<{arr:string[]}>({arr:[]})
    const obj2:any = shallowReactive({
        foo:{
            bar:{
                num: 1
            }
        }
    })

    const edit = () => {
        list.arr.push('改变')
        // obj2.foo = {name: '小满'}
        obj2.foo.bar.num = 45
        console.log(obj2)
    }



    //自定义Ref：防抖节流
    function MyRef<T>(value:T) {
        let timer:any
        return customRef((track, trigger) => {
            return{
                get(){
                    track()
                    return value
                },
                set(newVal){
                    clearTimeout(timer)
                    timer = setTimeout(() => {
                        console.log('防抖节流');
                        value = newVal
                        trigger()
                        timer = null
                    },500)
                    
                }
            }
        })
    }
    const obj = MyRef<string>('customRef悟空')
        
    const dom = ref<HTMLDivElement>()


    const change = () => {
        // ref 和 shallowRef都执行的时候，shallowRef也会香型;
        //所以 ref 和 shallowRef不能同时写，否则会影响shallowRef的值
        // Man.value.name = "达曼"
        // Man2.value.name = "小于" //强制更新
        // triggerRef(Man2)
        //对象方式才会响应
        // Man2.value = {
        //     name: '大荣'
        // }
        // console.log(Man2);
        obj.value = 'customRef 改变'
        console.log(dom.value?.innerText);
        
    }

    const submit = () => {
        console.log(form);
        
    }

    const add = () => {
        // list.push('end')
        setTimeout(() => {
            let res = ['tom', 'Jerry', 'bill']
            // list.push(...res);
            list.arr = res
            console.log(list)
        },500)
    }

</script>
<style scoped>

</style>