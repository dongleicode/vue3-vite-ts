/**
class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName){
        this.fullName = firstName + " " + middleInitial + " " + lastName
    }
}
interface Person {
    firstName: string;
    lastName: string
}
function greeter(person:Person) {
    return 'hello, ' + person.firstName + ' ' + person.lastName
}

// let user = 'jane user'
// let user = [1, 2, 3]
let user = new Student('jane', 'M', "user")
document.body.innerHTML = greeter(user)

let name:string = `gene`
let age:number = 37
let sentence:string = `hello, my name is ${name}`

console.log(`I'll be ${ age + 1} years old next month`);

//元组 Tuple
let x: [string, number]
x = ['hello', 10]
// x = [10, 'hello']


 * greeter.ts:29:6 - error TS2322: Type 'number' is not assignable to type 'string'.

29 x = [10, 'hello']
        ~~

greeter.ts:29:10 - error TS2322: Type 'string' is not assignable to type 'number'.

29 x = [10, 'hello']
console.log(x[0].substr(1));
console.log(x[1].substr(1));
x[3] = 'world'
console.log(x[5].toString());
x[6] = true;


enum Color {Red=1, Green=2, Blue=4}
// let c:Color = Color.Blue
// console.log(c);
let colorName: string = Color[1]
console.log(colorName);
let notSure:any = 4;
notSure = 'maybe a string instead'
// notSure = false
// notSure.ifItExists();
// notSure.toFixed()

let prettySure: Object = 4
prettySure.toFixed()

let list: any[] = [1, true, 'free']
list[1] = 100


function warnUser(): void{
    console.log('This is my warning message');
    
}
warnUser()

let unusable: void
console.log(unusable); //undefined


function error(message: string):never {
    throw new Error(message)
}

error('你好')

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error





console.log('123');


declare function create(o: object | null): void;

create({prop: 0})
create(null)




//设置返回类型为传递的实参——数据类型
function foo<T extends any>(val:T):T{
    return val
}

const res = foo(132)




function greeter(person: string) {
    return 'hello,' + person
}

let user = [1,2]

document.body.innerHTML = greeter(user)



let str1:string = 'dali'
let str2:string = 'da'

console.log(str1.search(str2))

interface ISearchFun {
    (x:string, y:string):boolean
}

let AishaveB:ISearchFun = function(x:string, y:string):boolean {
    return x.search(y) > -1
}

have('abc', 'a')

//泛型
interface ISearchFun1 {
    <T>(x:T, y:T):boolean
}

let fn3: ISearchFun1 = function<T>(x:T, y:T):boolean {
    return x==y
}

fn3<string>('abc', 'd')


//别名： type
type abc = string | number[]
type n = number
let num: abc = 'dali';
num = [2]
num = 'flower'

function fnFour(str:abc):n {
    return 1
}

fnFour('sdf')



class Animal {
    name:string;
    color: string;
    constructor(name, color){
        this.name = name
        this.color = color
    }
    eat(){
        return `My name is ${this.name}`;
    }
}

class Dog extends Animal{
    constructor(name, color){
        super(name, color) //调用父类的constructor(name, color)
    }
    say(){
        return this.name+','+this.eat()
    }
}

let p1 = new Dog('小黑', '黑')
console.log(p1.say())

interface IObj {
    name: string;
    age:number
}

// class Student implements IObj {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
// }

// let s = new Student('daming', 23)

// 修饰符：
// public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的；
// private 修饰的属性或方法是私有的，不能在声明它的类的外部访问；
// protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的



class Animal{
    public name:string;
    private age:number; //子类不能访问
    protected color: string;
    constructor(name, age, color){
        this.name = name
        this.age = age 
        this.color = color
    }
    static eat(){
        return 'chi'
    }
}

class Dog extends Animal{
    a:string;
    b:number;
    c:string;
    constructor(a, b, c){
        super(a, b, c)
        this.a = a
        this.b = b
        this.c = c
    }
    say(){
        return 'dog 说'
    }
}

let dog = new Dog('大力', 23, '白色')

console.log(dog.name)
// console.log(dog.age) //属性“age”为私有属性，只能在类“Cat”中访问。
console.log(dog) 
console.log(Animal.eat())
*/


var arr = ['a','b','c'];
arr[0];//可以 
arr['a'] //错误  不能通过名称来获取，只能索引
var obj = {a:'a',b:'b'};  //对象
obj.a //'a'
obj['a'] // 'a'

enum Color {red, blue,green}
let a6: Color = Color.red //0
let a2: string = Color[2] //green

console.log(a6) //0
console.log(a2)

enum Color2 {red = 1, blue = 10, green = 20}
let a3: Color2 = Color2.blue //10
console.log(a3)

let a4 = 'marker'
enum Color3 {red = 1, blue = <any>a4, green = 20}
let a5: Color3 = Color3.blue //marker
let a7: string = Color3[20] //green
console.log(a5)
console.log(a7)

enum Color5 {Red = 1.6, Green, Blue};
let c5 = Color5.Green;
console.log(c5);//2.6

enum Color6 {Red = 1.6, Green, Blue=<any>"b"};
 let c6:any = Color6.Blue;
 console.log(c6); //b


//如果未手动赋值的枚举项与手动赋值的重复了 后面的会覆盖前面的，尽量不要重复
enum Color7 {Red = 3, Green=3, Blue=<any>"b"};   
let c7:string = Color7[3];
console.log(c7); //Green

//枚举项有两种类型：常数项和计算所得项
var a8='123';
enum Color8 {Red, Green=<any>a8, Blue = "blue".length};
let c8:Color8 = Color8.Blue;//4
let c9:Color8 = Color8.Green;  //123

console.log(c8,c9);

//如果紧接在计算所得项后面的是未手动赋值的项，那么它就会因为无法获得初始值而报错
var a9='123';
// enum Color9 {Red=<any>a9, Green=<any>a9, Blue = "blue".length};  //可以的
enum Color9 {Red=<any>a9, Green=1, Blue};  //这种错误


/**
 * 元组  
数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。
我们知道数组中元素的数据类型都一般是相同的（any[] 类型的数组可以不同），如果存储的元素数据类型不同，则需要使用元组
 */

var lists:number[] = [1,2,3];
//数组泛型  不允许有其它的类型
var lists2:Array<string> = ['a','b','c'];
var lists3:Array<string | number> = ['a','b',1,2];
//任意值
var lists4:any[] = ['a',1,true]
var lists5:(string | number | boolean)[] = ['a',1,true]


//元组的写法：
let x: [number, string]
x = [5, 'abc']

var ff =function(){
    let x1: [string, number];
    x1 = ['abc', 5];
    x1[1] = 10;
    console.log(x1); // ["abc", 10]
}
ff();
//档位
enum Gear {
   First=1, Second=3, Third=5
}
enum Color {
   White, Red
}
//接口
interface Drivable {
   //启动
   start(): void;
   //驾驶
   drive(time: number, speed: Gear): void;
   //行驶距离
   getKilometer(): number
}

//abstract 抽象类不能被实例化
abstract class Car implements Drivable {  //定义一个抽象类  来实现Drivable接口
   protected _isRunning: boolean;   //只能被子类访问的属性
   protected _distanceFromStart: number;  //只能被子类访问的属性
   constructor() {
       this._isRunning = false;
       this._distanceFromStart = 0;
   }
   public start() {    //公共启动汽车
       this._isRunning = true;
   }
   //抽象类的子类必须实现抽象类的抽象方法
   abstract drive(time: number, speed: Gear): void;   
   public getKilometer(): number {    //公共行驶距离
       return this._distanceFromStart;
   }
}
// 子类
class BMW<T extends Color> extends Car {
   private color: Color;  //私有属性
   constructor(T) {
       super();
       this.color = T;
   }
   public drive(time: number, speed: Gear): void {
       if (this._isRunning) {
           this._distanceFromStart += time*speed;//行驶距离
       }
   }
   public getColor(): string {
       return Color[this.color]
   }
}
let bmw = new BMW(Color.Red);
bmw.start();
bmw.drive(10, Gear.First);
bmw.drive(60, Gear.Third);
document.body.innerHTML = 
"distance:"+bmw.getKilometer()+',color:'+bmw.getColor()



