import { BlockquoteHTMLAttributes } from '../../core/packages/runtime-dom/types/jsx';
//对象




// {}用来指定对象中可以包含哪些属性
//语法：{属性名：属性值，属性名：属性值}
//在属性名后边加上？，表示属性时可选的
let a: object
a = {}
a = function(){
}

let abc: {
    name: string,
    age?: number
}
abc = {
    name: 'sara',
    age: 12
}


let bac = {
    name: string,
    [prodName: string]:any
}

bac = {
    name: '把家',
    age: 12,
    sex: 'sdfkj'
}

//设置函数结构的类型声明：
let f : (a: number, b: number)=>number;
f = function(n1:number, n2:number):number{
    return n1 + n2;
}

let e:string[]
e = ['a', 'b', 'c']

let er:number[]
er = [2, 4, 8]