

//泛型

//1.可选参数
//可选参数后面不允许出现必选参数
//设置默认值
function fn1(x:number=1, y?:number):number {
    if(y){
        return x + y
    }
    return x
}

fn1(3,4)

//2.接口在函数中运用
interface IObj1 {
    id:number;
    name:string
}
function fn2(o:IObj1){
    console.log(o.name);
}

let o1 = {id:1, name: 's'}
fn2(o1)

//泛型
//函数声明
function sum<T>(x:T, y:T):T[]{
    return [x, y]
}

//函数表达式
let fn3 = function<U>(x:U, y:U):U[]{
    return [x, y]
}

//箭头函数
let es6 = <U>(x:U, y:U):U[] => [x,y]

//泛型的约束
interface ILengthNum {
    length: number
}

function fn4 <T extends ILengthNum>(str:T): number{
    return str.length
}

fn4('sdflj')

//泛型接口i
interface I03{
    <T>(a:T, b:T):boolean
}
let o9:I03 = function<T>(x,y){
    return x == y
}

o9<number>(111, 12)


interface I04<T>{
    (a:T, b:T):boolean
}

let o10:I04<number> = function(x,y){
    return x == y
}

o10(1, 12)

let f11:I04<number>

f11 = function(x,y){
    return x == y
}

f11(1, 2)

//泛型在类中的运用
class A2<T>{
    n:T;
    constructor(num:T){
        this.n = num
    }
    add(x:T):T{
        return x
    }
}

let a11 = new A2<number>(1)
a11.add(3)

//多个类型参数
function multi<N, S>(sum:[N, S]):[S,N]{
    return [sum[1], sum[0]]
}
multi<number, string>([1, 'one'])


interface CreateArrayFunc {
    <T>(length: number, value: T): Array<T>;
}
var createArray5: CreateArrayFunc;
    createArray5 = function<T>(length: number, value: T): Array<T> {
        let result: T[] = [];
        for (let i = 0; i < length; i++) {
            result[i] = value;
        }
        return result;
    }
createArray5<string>(3, 'x'); 

//也可以把泛型参数提前到接口名上
interface CreateArrayFunc2<T> {
    (length: number, value: T): Array<T>;
}
let createArray6: CreateArrayFunc2<string>;  
    createArray6 = function<T>(length: number, value: T): Array<T> {
        let result: T[] = [];
        for (let i = 0; i < length; i++) {
            result[i] = value;
        }
        return result;
    }
createArray6(3, 'x')


/**
 * 枚举  
enum类型是对JavaScript标准数据类型的一个补充
对于数组中获取数据，只能通过数组来获取，不能通过名称来获取


 */


var arr = ['a','b','c'];
arr[0];//可以 
arr['a'] //错误  不能通过名称来获取，只能索引
var obj = {a:'a',b:'b'};  //对象
obj.a //'a'
obj['a'] // 'a'

enum Color {red, blue,green}
let a1:Color = Color.red
console.log(a1)



