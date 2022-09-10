# vue3-vite-ts
//学习vue3第一章
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
    (1)vue2: Options API   逻辑分散、可读性差，可维护性差
       vue3: Composition API 逻辑分明，可维护性高

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



