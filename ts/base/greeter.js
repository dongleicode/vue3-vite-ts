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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var arr = ['a', 'b', 'c'];
arr[0]; //可以 
arr['a']; //错误  不能通过名称来获取，只能索引
var obj = { a: 'a', b: 'b' }; //对象
obj.a; //'a'
obj['a']; // 'a'
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["green"] = 2] = "green";
})(Color || (Color = {}));
var a6 = Color.red; //0
var a2 = Color[2]; //green
console.log(a6); //0
console.log(a2);
var Color2;
(function (Color2) {
    Color2[Color2["red"] = 1] = "red";
    Color2[Color2["blue"] = 10] = "blue";
    Color2[Color2["green"] = 20] = "green";
})(Color2 || (Color2 = {}));
var a3 = Color2.blue; //10
console.log(a3);
var a4 = 'marker';
var Color3;
(function (Color3) {
    Color3[Color3["red"] = 1] = "red";
    Color3[Color3["blue"] = a4] = "blue";
    Color3[Color3["green"] = 20] = "green";
})(Color3 || (Color3 = {}));
var a5 = Color3.blue; //marker
var a7 = Color3[20]; //green
console.log(a5);
console.log(a7);
var Color5;
(function (Color5) {
    Color5[Color5["Red"] = 1.6] = "Red";
    Color5[Color5["Green"] = 2.6] = "Green";
    Color5[Color5["Blue"] = 3.6] = "Blue";
})(Color5 || (Color5 = {}));
;
var c5 = Color5.Green;
console.log(c5); //2.6
var Color6;
(function (Color6) {
    Color6[Color6["Red"] = 1.6] = "Red";
    Color6[Color6["Green"] = 2.6] = "Green";
    Color6[Color6["Blue"] = "b"] = "Blue";
})(Color6 || (Color6 = {}));
;
var c6 = Color6.Blue;
console.log(c6); //b
//如果未手动赋值的枚举项与手动赋值的重复了 后面的会覆盖前面的，尽量不要重复
var Color7;
(function (Color7) {
    Color7[Color7["Red"] = 3] = "Red";
    Color7[Color7["Green"] = 3] = "Green";
    Color7[Color7["Blue"] = "b"] = "Blue";
})(Color7 || (Color7 = {}));
;
var c7 = Color7[3];
console.log(c7); //Green
//枚举项有两种类型：常数项和计算所得项
var a8 = '123';
var Color8;
(function (Color8) {
    Color8[Color8["Red"] = 0] = "Red";
    Color8[Color8["Green"] = a8] = "Green";
    Color8[Color8["Blue"] = "blue".length] = "Blue";
})(Color8 || (Color8 = {}));
;
var c8 = Color8.Blue; //4
var c9 = Color8.Green; //123
console.log(c8, c9);
//如果紧接在计算所得项后面的是未手动赋值的项，那么它就会因为无法获得初始值而报错
var a9 = '123';
// enum Color9 {Red=<any>a9, Green=<any>a9, Blue = "blue".length};  //可以的
var Color9;
(function (Color9) {
    Color9[Color9["Red"] = a9] = "Red";
    Color9[Color9["Green"] = 1] = "Green";
    Color9[Color9["Blue"] = 2] = "Blue";
})(Color9 || (Color9 = {}));
; //这种错误
/**
 * 元组
数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。
我们知道数组中元素的数据类型都一般是相同的（any[] 类型的数组可以不同），如果存储的元素数据类型不同，则需要使用元组
 */
var lists = [1, 2, 3];
//数组泛型  不允许有其它的类型
var lists2 = ['a', 'b', 'c'];
var lists3 = ['a', 'b', 1, 2];
//任意值
var lists4 = ['a', 1, true];
var lists5 = ['a', 1, true];
//元组的写法：
var x;
x = [5, 'abc'];
var ff = function () {
    var x1;
    x1 = ['abc', 5];
    x1[1] = 10;
    console.log(x1); // ["abc", 10]
};
ff();
//档位
var Gear;
(function (Gear) {
    Gear[Gear["First"] = 1] = "First";
    Gear[Gear["Second"] = 3] = "Second";
    Gear[Gear["Third"] = 5] = "Third";
})(Gear || (Gear = {}));
(function (Color) {
    Color[Color["White"] = 0] = "White";
    Color[Color["Red"] = 1] = "Red";
})(Color || (Color = {}));
//abstract 抽象类不能被实例化
var Car = /** @class */ (function () {
    function Car() {
        this._isRunning = false;
        this._distanceFromStart = 0;
    }
    Car.prototype.start = function () {
        this._isRunning = true;
    };
    Car.prototype.getKilometer = function () {
        return this._distanceFromStart;
    };
    return Car;
}());
// 子类
var BMW = /** @class */ (function (_super) {
    __extends(BMW, _super);
    function BMW(T) {
        var _this = _super.call(this) || this;
        _this.color = T;
        return _this;
    }
    BMW.prototype.drive = function (time, speed) {
        if (this._isRunning) {
            this._distanceFromStart += time * speed; //行驶距离
        }
    };
    BMW.prototype.getColor = function () {
        return Color[this.color];
    };
    return BMW;
}(Car));
var bmw = new BMW(Color.Red);
bmw.start();
bmw.drive(10, Gear.First);
bmw.drive(60, Gear.Third);
document.body.innerHTML =
    "distance:" + bmw.getKilometer() + ',color:' + bmw.getColor();
