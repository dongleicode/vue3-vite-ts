#虚拟DOM
---
## 1.1 Vue中的虚拟DOM
1. 什么是虚拟DOM？
所谓虚拟DOM，就是用一个JS对象来描述一个DOM节点，像如下示例：
    `<div class="a" id="b">我是内容</div>`

    {
    tag:'div',        // 元素标签
    attrs:{           // 属性
        class:'a',
        id:'b'
    },
    text:'我是内容',  // 文本内容
    children:[]       // 子元素
    }

我们把组成一个DOM节点的必要东西通过一个JS对象表示出来，那么这个JS对象就可以用来描述这个DOM节点，我们把这个JS对象就称为是这个真实DOM节点的虚拟DOM节点。

2. 为什么要有虚拟DOM？
Vue是数据驱动视图的，数据发生变化视图就要随之更新，在更新视图的时候难免要操作DOM,而操作真实DOM又是非常耗费性能的，这是因为浏览器的标准就把 DOM 设计的非常复杂，所以一个真正的 DOM 元素是非常庞大的。

3. 那么有没有什么解决方案呢？当然是有的。我们可以用JS的计算性能来换取操作DOM所消耗的性能。

既然我们逃不掉操作DOM这道坎,但是我们可以尽可能少的操作DOM。那如何在更新视图的时候尽可能少的操作DOM呢？最直观的思路就是我们不要盲目的去更新视图，而是通过对比数据变化前后的状态，计算出视图中哪些地方需要更新，只更新需要更新的地方，而不需要更新的地方则不需关心，这样我们就可以尽可能少的操作DOM了。这也就是上面所说的用JS的计算性能来换取操作DOM的性能。

我们可以用JS模拟出一个DOM节点，称之为虚拟DOM节点。当数据发生变化时，我们对比变化前后的虚拟DOM节点，通过DOM-Diff算法计算出需要更新的地方，然后去更新需要更新的视图。

这就是虚拟DOM产生的原因以及最大的用途。

## 1.2 Vue中的虚拟DOM
### 1.2.1 VNode类
我们说了，虚拟DOM就是用JS来描述一个真实的DOM节点。而在Vue中就存在了一个VNode类，通过这个类，我们就可以实例化出不同类型的虚拟DOM节点，源码如下：
    // 源码位置：src/core/vdom/vnode.js

    export default class VNode {
    constructor (
        tag?: string,
        data?: VNodeData,
        children?: ?Array<VNode>,
        text?: string,
        elm?: Node,
        context?: Component,
        componentOptions?: VNodeComponentOptions,
        asyncFactory?: Function
    ) {
        this.tag = tag                                /*当前节点的标签名*/
        this.data = data        /*当前节点对应的对象，包含了具体的一些数据信息，是一个VNodeData类型，可以参考VNodeData类型中的数据信息*/
        this.children = children  /*当前节点的子节点，是一个数组*/
        this.text = text     /*当前节点的文本*/
        this.elm = elm       /*当前虚拟节点对应的真实dom节点*/
        this.ns = undefined            /*当前节点的名字空间*/
        this.context = context          /*当前组件节点对应的Vue实例*/
        this.fnContext = undefined       /*函数式组件对应的Vue实例*/
        this.fnOptions = undefined
        this.fnScopeId = undefined
        this.key = data && data.key           /*节点的key属性，被当作节点的标志，用以优化*/
        this.componentOptions = componentOptions   /*组件的option选项*/
        this.componentInstance = undefined       /*当前节点对应的组件的实例*/
        this.parent = undefined           /*当前节点的父节点*/
        this.raw = false         /*简而言之就是是否为原生HTML或只是普通文本，innerHTML的时候为true，textContent的时候为false*/
        this.isStatic = false         /*静态节点标志*/
        this.isRootInsert = true      /*是否作为跟节点插入*/
        this.isComment = false             /*是否为注释节点*/
        this.isCloned = false           /*是否为克隆节点*/
        this.isOnce = false                /*是否有v-once指令*/
        this.asyncFactory = asyncFactory
        this.asyncMeta = undefined
        this.isAsyncPlaceholder = false
    }

    get child (): Component | void {
        return this.componentInstance
    }
    }

### 1.2.2 VNode的类型
- 注释节点
- 文本节点
- 元素节点
- 组件节点
- 函数式组件节点
- 克隆节点

以上就是VNode可以描述的多种节点类型，它们本质上都是VNode类的实例，只是在实例化的时候传入的属性参数不同而已。

### 1.2.3 VNode的作用
说了这么多，那么VNode在Vue的整个虚拟DOM过程起了什么作用呢？

其实VNode的作用是相当大的。我们在视图渲染之前，把写好的template模板先编译成VNode并缓存下来，等到数据发生变化页面需要重新渲染的时候，我们把数据发生变化后生成的VNode与前一次缓存下来的VNode进行对比，找出差异，然后有差异的VNode对应的真实DOM节点就是需要重新渲染的节点，最后根据有差异的VNode创建出真实的DOM节点再插入到视图中，最终完成一次视图更新。

## 1.3 总结
本章首先介绍了虚拟DOM的一些基本概念和为什么要有虚拟DOM，其实说白了就是以JS的计算性能来换取操作真实DOM所消耗的性能。接着从源码角度我们知道了在Vue中是通过VNode类来实例化出不同类型的虚拟DOM节点，并且学习了不同类型节点生成的属性的不同，所谓不同类型的节点其本质还是一样的，都是VNode类的实例，只是在实例化时传入的属性参数不同罢了。最后探究了VNode的作用，有了数据变化前后的VNode，我们才能进行后续的DOM-Diff找出差异，最终做到只更新有差异的视图，从而达到尽可能少的操作真实DOM的目的，以节省性能。

---
# 2 Vue中的DOM-Diff
## 2.1