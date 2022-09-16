
function sum(a:number, b:number){
    return a+b;
}
sum(12, 12)




//可以直接使用字面量进行类型声明
let a: 10;
a = 10
// a = 12报错
console.log(a);


//可以使用 | 来连接多个类型（联合类型）
let b: 'male' | 'female'
b = 'female'
b = 'male'

let c: boolean | string
c = false
c = 'hello'


//any: 表示的是任意类型，一个变量设置类型为any后相当于该变量关闭了TS的类型检测
//使用TS时，不建议使用any类型
// let d:any


//声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any(隐式的any)
let d;
d = 10
d = true
d = 'hello'


//unknow 表示未知类型的值，尽量不要用any
let e: unknown
e = 10
e = true
e = 'hello'


//函数类型自动判断
function fn():boolean{
    return true
}

//void表示没有返回值
function fn1():void{
    return
}

function fn2(): string | number{
    return '你好' || Boolean
}

//表示永远不会返回结果
function fn3(): never {
    throw new Error('报错了')
}





