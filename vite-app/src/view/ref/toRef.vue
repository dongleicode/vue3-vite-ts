<template>
    <a-page-header
        style="border: 1px solid rgb(235, 237, 240)"
        title="Base"
        sub-title="This is toBase"
        @back="() => router.push('/base')"
    />
    <a-typography>
        <a-typography-title class="p-t-20" :level="3">toRef</a-typography-title>
        <a-space direction="vertical">
            <a-typography-text mark>只能修改响应式对象的值，非响应式试图毫无变化</a-typography-text>
            <a-typography-text code>
                {{man}}
            </a-typography-text>
            <a-typography-text code>
                {{name}}--{{age}}--{{like}}
            </a-typography-text>
            <a-typography-text code>
                源码：{{toRefs}}
            </a-typography-text>
            <a-button @click="change" type="primary">修改</a-button>
            <a-divider style="height: 2px; background-color: #7cb305" />
        </a-space>
        <a-typography-title class="p-t-20" :level="3">toRaw</a-typography-title>
        <a-space direction="vertical">
            <a-typography-text mark>不耗费性能：对原始数据进行修改，这样就不会被追踪，这样就不会更新UI界面</a-typography-text>
            <a-typography-text code>
                {{man}}
            </a-typography-text>
            <a-typography-text code>
                {{name}}--{{age}}--{{like}}
            </a-typography-text>
            <a-typography-text code>
                源码：{{toRaw}}
            </a-typography-text>
            <a-button @click="change2" type="primary">修改</a-button>
            <a-divider style="height: 2px; background-color: #7cb305" />
        </a-space>
    </a-typography>

</template>
<script setup lang='ts'>
    import { useRouter } from 'vue-router'
    import { toRef, reactive, toRefs, toRaw } from 'vue'
    const router = useRouter();
    const obj = { name:'小满', age:23, like: 'js'}
    const man = reactive(obj)
    // const like = toRef(man, 'like')
    /*手写toRefs  等同于引用的toRefs
    const toRefs = <T extends object>(object: T) => {
        const map: any = {}
        for (let key in object){
            map[key] = toRef(object, key)
        }
        return map
    }
    */

    let { name, age, like } = toRefs(man)
    const change = () => {
        // man.like = '小型' //没有更新界面
        name.value = '洛阳他'
        console.log(name,age,like);
    }
    let obj2 = toRaw(man) //对原始数据进行修改，这样就不会被追踪，这样就不会更新UI界面
    console.log(obj2 == obj); //true
    const change2 = () => {
        obj2.name = '没有刷线UI界面'
        //数据已经变化，但是界面并没有更新
        console.log(man);
        console.log(man, man['__v_raw']);
    }
</script>
<style scoped>

</style>