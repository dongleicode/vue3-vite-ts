    /** vue/reactivity响应系统的实现原理 */
    /** 可以参考源码地址：https://unpkg.com/@vue/reactivity@3.0.5/dist/reactivity.global.js */

    const bucket = new WeakMap()
    let activeEffect;
    let shouldTrack = true //数组，是否允许被跟踪
    const effectStack = [] //新增effect栈

    //追踪和收集依赖,建立响应联系
    function track(target, key){
        //没有activeEffect, 直接return
        if(!activeEffect || !shouldTrack) return
        let depsMap = bucket.get(target)
        if(!depsMap){
            bucket.set(target, (depsMap = new Map()))
        }

        let deps = depsMap.get(key)
        if(!deps){
            depsMap.set(key, (deps = new Set()))
        }

        deps.add(activeEffect)
        activeEffect.deps.push(deps)
    }

    //触发副作用函数重新执行
    function trigger(target, key, type, newV) {    
        const depsMap = bucket.get(target)
        if(!depsMap){return}
        const effects = depsMap.get(key)
        const effectsToRun = new Set()
        effects && effects.forEach(effectFn => {//避免无限递归
            if(effectFn !== activeEffect){
                effectsToRun.add(effectFn)
            }
        })
        
        if(type === 'ADD' || type === 'DELETE' || (
            type === 'SET' && Object.prototype.toString.call(target) === '[Object Map]'
        )
        ){
            //则取出那些与MAP_KEY_ITERATE_KEY相关联的副作用函数并执行
            const iterateEffects = depsMap.get(MAP_KEY_ITERATE_KEY)
            iterateEffects && iterateEffects.forEach(effectFn => {//避免无限递归
            if(effectFn !== activeEffect){
                effectsToRun.add(effectFn)
            }
        })
        }

    //数组处理
    if(type === 'ADD' && Array.isArray(target)){
            const lengthEffects = depsMap.get('length')
            lengthEffects && lengthEffects.forEach(effectFn => {
                if(effectFn !== activeEffect){
                    effectsToRun.add(effectFn)
                }
            })
        }

        if(Array.isArray(target) && key === 'length'){
            depsMap.forEach((effects, key) => {
                if(key >= newV){
                    effects.forEach(effectFn => {
                        if(effectFn !== activeEffect){
                            effectsToRun.add(effectFn)
                        }
                    })
                }
            })
        }

        effectsToRun.forEach(effectFn => {
            if(effectFn.options.scheduler){
                effectFn.options.scheduler(effectFn)
            }else{
                effectFn()
            }
        })
    }


    //避免副作用函数产生遗留
    function cleanup(effectFn) {
                for(let i = 0; i < effectFn.deps.length; i++){
            const deps = effectFn.deps[i] 
            deps.delete(effectFn)
        }
        effectFn.deps.length = 0
    }

    //用来注册副作用函数，同时它也允许指定一些选项参数options，例如指定scheduler调度器来控制副作用函数的执行时机和方式
    function effect(fn, options = {}) {
        const effectFn = () => {
            cleanup(effectFn)
            activeEffect = effectFn
            //在调用副作用函数之前将当前副作用函数压入栈顶
            //栈就是一个桶，后进先出，后进者在栈顶
            effectStack.push(effectFn)  
            const res = fn()
            //在当前副作用函数执行完毕后，将当前副作用函数弹出栈，并把activeEffect 还原为之前的值
            effectStack.pop() //删除数组最后一个元素，并返回该元素
            activeEffect = effectStack[effectStack.length - 1]
            return res
        }
        effectFn.options = options
        effectFn.deps = []
        if(!options.lazy){
            effectFn()
        }
        return effectFn
    }


    const ITERATE_KEY = Symbol()
    const reactiveMap = new Map()
    function reactive(obj) { //深响应
        const existProxy = reactiveMap.get(obj)
        if(existProxy){return existProxy}
        const proxy = createReactive(obj)
        reactiveMap.set(obj, proxy)
        return proxy
    }

    function shallowReactive(obj){//浅响应
        return createReactive(obj, true);
    }

    function readonly(obj){
        return createReactive(obj, false, true);
    }

    function shallowReadonly(obj){
        return createReactive(obj, true, true);
    }

    const arrayInstrumentations = {}
    ;['includes', 'indexOf', 'lastIndexOf'].forEach(method => {
        const originMethod = Array.prototype[method]
        arrayInstrumentations[method] = function(...args){
            let res = originMethod.apply(this, args)
            if(res === false || res === -1){
                res = originMethod.apply(this.raw, args)
            }
            return res
        }
    })

    ;['push', 'pop', 'shift', 'unshift', 'splice'].forEach(method => {
        const originMethod = Array.prototype[method]
        arrayInstrumentations[method] = function(...args){
            shouldTrack = false
            let res = originMethod.apply(this, args)
            shouldTrack = true
            return res
        }
    })

    function iterationMethod(){
        const target = this.raw
        const itr = target[Symbol.iterator]()
        const wrap = (val) => typeof val === 'object' && val !== null ? reactive(val) : val 
        track(target, ITERATE_KEY)
        return {
            next(){
                const {value, done} = itr.next()
                return {
                    value: value ? [wrap(value[0]), wrap(value[1])] : value,
                    done
                }
            },
            [Symbol.iterator](){
                return this
            }
        }
    }

    function valuesIterationMethod() {
        const target = this.raw
        const itr = target.values()
        const wrap = (val) => typeof val === 'object' ? reactive(val) : val 
        track(target, ITERATE_KEY)
        return {
            next(){
                const {value, done} = itr.next()
                return {
                    value: wrap(value),
                    done
                }
            },
            [Symbol.iterator](){
                return this
            }
        }
    }


    const MAP_KEY_ITERATE_KEY = Symbol() //不关注value是否改变，只关注key是否改变。keg改变触发响应，否则不触发
    function keysIterationMethod() {
        const target = this.raw
        const itr = target.keys()
        const wrap = (val) => typeof val === 'object' ? reactive(val) : val 
        track(target, MAP_KEY_ITERATE_KEY)
        return {
            next(){
                const {value, done} = itr.next()
                return {
                    value: wrap(value),
                    done
                }
            },
            [Symbol.iterator](){
                return this
            }
        }
    }

    const mutableInstrumentations = {
        [Symbol.iterator]: iterationMethod,
        entries: iterationMethod,
        values: valuesIterationMethod,
        keys: keysIterationMethod,
        forEach(callback, thisArg){
            const wrap = (val) => typeof val === 'object' ? reactive(val) : val 
            const target = this.raw
            track(target, ITERATE_KEY)
            target.forEach((v,k) => {
                // 手动调用callback，用wrap 函数包裹 value和key 后再传给callback，这样就实现了深响应
                // 通过.call 调用callback，并传递 thisArg
                callback.call(thisArg, wrap(v), wrap(k), this)
            })
        },
        get(key){
            const target = this.raw
            const hadKey = target.has(key)
            track(target, key)
            if(hadKey){
                const res = target.get(key)
                return typeof res === 'object' ? reactive(res) : res
            }
        },
        set(key, value){
            const target = this.raw
            const hadKey = target.has(key)
            const oldValue = target.get(key)
            // target.set(key, value)//响应式数据设置到原始数据上的行为称为数据污染

            // 获取原始数据，由于value 本身可能已经是原始数据，所以此时value.raw 不存在，则直接使用value
            const rawValue = value.raw || value
            target.set(key, rawValue)

            if(!hadKey){//值不存在的情况下才需要触发响应
                trigger(target, key, 'ADD')
            }else if(oldValue !== value || (oldValue === oldValue && value === value)){
                trigger(target, key, 'SET')
            }
        },
        add(key){
            const target = this.raw
            const hadKey = target.has(key)
            const res = target.add(key)
            if(!hadKey){//值不存在的情况下才需要触发响应
                trigger(target, key, 'ADD')
            }
            return res
        },
        delete(key){
            const target = this.raw
            const hadKey = target.has(key)
            const res = target.add(key)
            if(hadKey){//值不存在的情况下才需要触发响应
                trigger(target, key, 'DELETE')
            }
            return res
        }
    }



    function createReactive(obj, isShallow = false, isReadonly = false) {
        return new Proxy(obj, {
            get(target, key, receiver){
                // console.log('get:', key);
                if(key === 'raw'){
                    return target
                }

                //对Set和Map的处理
                if(key === 'size'){
                    track(target, ITERATE_KEY)
                    return Reflect.get(target, key, target)
                }
                //可迭代协议和迭代器协议
                if(key === '[Symbol.iterator]' || key === 'entries' || key === 'values' || key === 'keys'  || key === 'forEach' || key === 'get' || key === 'set' || key === 'add' || key === 'delete'){
                    return mutableInstrumentations[key]
                }
                
                // return target[key].bind(target)
                if(Array.isArray(target) && arrayInstrumentations.hasOwnProperty(key)){
                    return Reflect.get(arrayInstrumentations, key, receiver)
                }
                const res = Reflect.get(target, key, receiver)
                if(!isReadonly && typeof key !== 'symbol'){
                    track(target, key)
                }
                if(isShallow){
                    return res
                }
                if(typeof res === 'object' && res !== null){//深响应
                    return isReadonly ? readonly(res) : reactive(res)
                }

                return res
            },
            set(target, key, newV, receiver){
                if(isReadonly){
                    console.warn(`属性${key}是只读的`)
                    return true
                }
                // target 是原始对象 proto
                // receiver 仍然是代理对象 child,不再是target的代理对象
                const oldV = target[key]
                const type = Array.isArray(target)
                ? Number(key) < target.length ? 'SET' : 'ADD'

                : Object.prototype.hasOwnProperty.call(target, key) ? 'SET' : 'ADD'
                const res = Reflect.set(target, key, newV, receiver)
                if(target === receiver.raw){
                // 比较新值与旧值，只有当它们不全等，并且不都是NaN的时候才触发响应
                    if(oldV !== newV && (oldV === oldV || newV === newV)){
                        trigger(target, key, type, newV)
                    }
                }
                
                return res
            },
            deleteProperty(target, key){
                if(isReadonly){
                    console.warn(`属性${key}是只读的`)
                    return true
                }
                const hadKey = Object.prototype.hasOwnProperty.call(target, key)
                const res = Reflect.deleteProperty(target, key)
                if(res && hadKey){
                    trigger(target, key, 'DELETE')
                }
                return res
            },
            has(target, key){
                track(target, key)
                return Reflect.has(target, key)
            },
            ownKeys(target){
                track(target, Array.isArray(target) ? 'length' : ITERATE_KEY)
                // trigger(target, ITERATE_KEY)
                return Reflect.ownKeys(target)
            }
        })
    }


    //Proxy代理的是引用数据类型，基本数据类型需要包裹一层
    function ref(val) {
        const wrapper = {
            value: val
        }
        Object.defineProperty(wrapper, '__v_isRef', {
            value: true
        })
        return reactive(wrapper)
    }

    //基本数据的响应式，需要重新封装
    function toRef(obj, key) {
        const wrapper = {
            get value(){
                return obj[key]
            },
            set value(val){
                obj[key] = val
            }
        }
        Object.defineProperty(wrapper, '__v_isRef', {
            value: true
        })
        return wrapper
    }

    function toRefs(obj) {
        const ret = {}
        for(const key in obj){
            ret[key] = toRef(obj, key)
        }
        return ret
    }

    //自动脱ref
    //这也是为什么我们可以在模板直接访问一个ref的值，而无须通过value属性来访问：
    function proxyRefs(target) {
        return new Proxy(target, {
            get(target, key, receiver){
                const value = Reflect.get(target, key, receiver)
                return value.__v_isRef ? value.value : value
            },
            set(target, key, newValue, receiver){
                const value = target[key]
                if(value.__v_isRef){
                    value.value = newValue
                    return true
                }
                return Reflect.set(target, key, newValue, receiver)
            }
        })
    }
