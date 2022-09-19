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
   view 《------》 viewmodel ------》《------- model --》
    
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
第一篇：第1章
    1、声明式： vue    性能：找出差异的性能消耗+直接修改的性能消耗
       命令式：jquery  性能：直接修改的性能消耗

       虚拟DOM存在的理由：找出差异的性能消耗最小化  diff算法消耗最小化

    2、纯编译时：svelte ，直接将代码转化为js原生命令式代码
       运行时+编译时：vue3  灵活性+性能
    
第一篇：第2章：框架设计的核心要素
     热更新：hot module replacement (HMR)
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
            正是因为虚拟DOM的这种灵活性，Vue.js 3 除了支持使用模板描述UI 外，还支持使用虚拟DOM 描述UI。其实我们在Vue.js组件中手写的渲染函数就是使用虚拟DOM 来描述UI的，如以下代码所示：
            01 import { h } from 'vue'
            02
            03 export default {
            04   render() {
            05     return h('h1', { onClick: handler }) // 虚拟DOM
            06   }
            07 }
        3.2 渲染器
            渲染器的工作原理其实很简单，归根结底，都是使用一些我们熟悉的DOM 操作API 来完成渲染工作。
            当然：渲染器的精髓都在更新节点的阶段。

            工作原理：递归地遍历虚拟DOM对象，并调用原生DOM API 来完成真实DOM的创建。渲染器的精髓在于后续的更新，它会通过Diff算法找出变更点，并且只会更新需要更新的内容。
            
            
        3.3 组件的本质:一组虚拟DOM元素的封装
            虚拟DOM 其实就是用来描述真实DOM的普通 JavaScript对象。
            渲染器会把这个对象渲染为真实DOM元素。

            虚拟DOM也可以描述组件
            组件就是一组虚拟DOM元素的封装

        3.4 模板的工作原理
            模板是如何工作的呢?
            编译器

            其中<template>标签里的内容就是模板内容，编译器会把模板内容编译成渲染函数并添加到<script>标签块的组件对象上。

            所以，无论是使用模板还是直接手写渲染函数，对于一个组件来说，它要渲染的内容最终都是通过渲染函数产生的，然后渲染器再把渲染函数返回的虚拟DOM 渲染为真实DOM，这就是模板的工作原理，也是vue渲染页面的流程。

        3.5 vue.js是各个模块组成的有机整体
            组件的实现依赖于渲染器，模板的编译依赖于编译器，并且编译后生成的代码是根据渲染器和虚拟DOM的设计决定的，因此 Vue.js的各个模块之间是互相关联、互相制约的，共同构成一个有机整体。
            所以vue中的编译器能识别出哪些是静态属性id，哪些是动态属性(v-bind):class，在生成代码的时候完全可以附带这些信息，渲染器会通过这些信息，知道那些属性发生改变，节省了寻找变更的工作量，提升了性能。
            我们了解到编译器和渲染器之间是存在信息交流的，它们互相配合使得性能进一步提升，而它们之间交流的媒介就是虚拟DOM对象.

        3.6 总结
             Vue.js 是一个声明式的框架。声明式的好处在于，它直接描述结果，用户不需要关注过程。
             Vue.js 采用模板的方式来描述UI，但它同样支持使用虚拟DOM 来描述UI。虚拟DOM 要比模板更加灵活，但模板要比虚拟DOM 更加直观。

             渲染器的工作原理：递归地遍历虚拟DOM对象，并调用原生DOM API 来完成真实DOM的创建。渲染器的精髓在于：它会通过Diff算法找出变更点，并且只会更新需要更新的内容。

             组件的本质， 是一组虚拟DOM元素的封装。它可以是一个返回虚拟DOM的函数，也可以是一个对象，但这个对象下必须要有一个函数用来产出组件要渲染的虚拟DOM。
             渲染器在渲染组件时，会先获取组件要渲染的内容，即执行组件的渲染函数并得到其返回值，我们称之为subtree，最后再递归地调用渲染器将subtree渲染出来即可。

             Vue.js的模板会被一个叫作编译器的程序编译为渲染函数。


第二篇 响应系统
       第4章 响应系统的作用与实现
       4.1 响应式数据和副作用函数
             副作用函数：产生副作用，影响其他函数或全局
             01 function effect() {
             02   document.body.innerText = 'hello vue3'
             03 }

             01 // 全局变量
            02 let val = 1
            03
            04 function effect() {
            05   val = 2 // 修改全局变量，产生副作用
            06 }

           响应式数据：修改obj.text的值，同时希望副作用函数会重新执行
            01 const obj = { text: 'hello world' }
            02 function effect() {
            03   // effect 函数的执行会读取obj.text
            04   document.body.innerText = obj.text
            05 }

            01 obj.text = 'hello vue3' // 修改obj.text的值，同时希望副作用函数会重新执行

        4.2 响应式数据的基本实现
            微型响应系统——实现原理：我们创建了一个用于存储副作用函数的桶bucket，它是Set类型。接着定义原始数据data，obj是原始数据的代理对象，我们分别设置了get和set拦截函数，用于拦截读取和设置操作。当读取属性时将副作用函数effect添加到桶里，即bucket.add(effect)，然后返回属性值；当设置属性值时先更新原始数据，再将副作用函数从桶里取出并重新执行，这样我们就实现了响应式数据。

             //存储副作用函数的桶
            const bucket = new Set()

            //原始数据
            const data = {text: 'hello world'}

            //对原始数据的代理
            const obj = new Proxy(data, {
                //拦截读取操作
                get(target, key){
                    //将副作用函数effect添加大存储副作用函数的桶中
                    bucket.add(effect)
                    return target[key]
                },
                //拦截设置操作
                set(target, key, newVal){
                    //设置属性值
                    target[key] = newVal
                    //把副作用函数从桶里取出并执行
                    bucket.forEach(fn => fn())
                    //返回true代表设置操作成功
                    return true
                }
            })


            //副作用函数
            function effect() {
            // effect 函数的执行会读取obj.text
            document.getElementById('active').innerText = obj.text
            }

            //执行副作用函数，触发读取
            effect()

            setTimeout(() => {
                obj.text = 'hello vue3'
            }, 1000)
        
        4.3 设计一个完善的响应系统
            微型响应系统——工作流程
                ·当读取操作发生时，将副作用函数收集到“桶”中；
                ·当设置操作发生时，从“桶”中取出副作用函数并执行

            





