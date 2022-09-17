# vue3-vite-ts
//学习vue3第一篇
https://blog.csdn.net/qq1195566313/article/details/122768533

Vue Template Explorer 查看静态标记
1、vue?
    是一套用于构建用户界面的渐进式框架。与其他大型框架不同的是，vue被设计为可以自底向上逐层应用。Vue的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目的整合。另一方面，党羽现代化的工具链以及各种支持类库结合使用时，Vue也晚晴能够为复杂的单页应用提供驱动

2、vue mvvm模式？
    （1）view：视图层（UI用户界面）
    （2）viewmodel: 业务逻辑层（一切js可视为业务逻辑）
    （3）model：数据层（存储数据，对数据进行增删改查）
    view <------> viewmodel ------><------- model
    
3、vue2  和 vue3的区别：
    (1)vue2: Options API 选项API  逻辑分散、可读性差，可维护性差
       vue3: Composition API  组合式API 逻辑分明，可维护性高

    （2）vue3.0新特性介绍
        * 重写双向数据绑定
            vue2: Object.defineProperty()
            vue3: Proxy
            改进项：
                [1]丢掉麻烦的备份数据
                [2]省去for in 循环
                [3]可以监听数组变化
                [4]代码更简化
                [5]可以监听动态新增的属性
                [6]可以监听删除的属性
                [7]可以监听数组的索引和length属性
        * VDOM性能瓶颈
            vue3:通过patch flag
        * Fragments
        * Tree-Shaking 的支持
        * Composition API

4、vite的优势
    （1）冷服务 ESM 动态引入
    （2）HMR 模块热更新
    （3）Rollup打包代码，预配置，支持大部分Rollup插件

5.vue源码地址：https://github.com/vuejs/core

霍春阳《vue3.js的设计与实现》
第一篇：第2章
    （1）开发环境:__DEV__  表示 true false
     (2) 生产环境：process.env.NODE_ENV !== 'production'
     (3)/*#__PURE__*/ 实现tree-shaking rollup和webpack都能识别
     (4)vue3源码：__FEATURE_OPTIONS_API__: isBundlerESMBuild ? `__VUE_OPTIONS_API__` : true, 设置特性开关

     vue3的特性开关，在webpack中设置
        // webpack.DefinePlugin 插件配置
        new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: JSON.stringify(true) // 开启vue2的选项api编码模式
        })

      (5)框架：使用TS 编写代码与对TS 类型支持友好是两件事
     
第一篇：第3章：vue3.js的设计思路
        3.1 vue3.js是一个声明式的UI框架

            用JavaScript对象来描述
            02 let level = 3
            03 const title = {
            04   tag: `h${level}`, // h3 标签
            05 }

            使用模板来描述
            01 <h1 v-if="level === 1"></h1>
            02 <h2 v-else-if="level === 2"></h2>
            03 <h3 v-else-if="level === 3"></h3>
            04 <h4 v-else-if="level === 4"></h4>
            05 <h5 v-else-if="level === 5"></h5>
            06 <h6 v-else-if="level === 6"></h6>

            对于h1-h6这些h5标签，使用模板来描述，远没有JavaScript对象灵活。
            而使用JavaScript对象来描述UI的方式，其实就是所谓的虚拟DOM。
            正是因为虚拟DOM的这种灵活性，Vue.js 3 除了支持使用模板描述，UI 外，还支持使用虚拟DOM 描述UI。其实我们在Vue.js组件中手写的渲染函数就是使用虚拟DOM 来描述UI的，如以下代码所示：
            01 import { h } from 'vue'
            02
            03 export default {
            04   render() {
            05     return h('h1', { onClick: handler }) // 虚拟DOM
            06   }
            07 }


