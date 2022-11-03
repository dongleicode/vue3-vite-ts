
//类:
let arr: number[] = [1, 23, 5]
let s: string = 'demo'
let a3:any = 12
let id:unknown = 123
let str:number | string = 123



let a1:Array<number> = [2, 3]
let a2:Array<number> = [2, 3]

//接口：Interfaces,对行为的抽象，可以对对象的形状进行描述
//对象的接口定义
interface Person {
    name: string;
    age?: number;
    [propName:string]: any;
}

let tom: Person = {
    name: 'dali',
    age: 12,
    sex: 123
}

//参数类型处理：
function sum(x:number, y:number):number {//返回number
    return x+y
}

function f(x:number, y:number):void {//无返回值
    if(x < y){

    }else{

    }
}


//泛型Genrics：可是未指定类型，用的时候才指定

function fn<T>(x:T, y:T):T[] {
    return [x,y]
}

fn<string>('1', '2')
fn<number>(1,2)
fn<boolean>(true,false)
fn<string | number>('21', 23)


//接口
interface IPhone{
    mic: string;
    camera: boolean;
    call(): string;
}

let mi :IPhone = {
    mic: 'android',
    camera: true,
    call: function(){
        return 'call'
    }
}

interface IPerson { //多谢，和接口定义的不一致，就报错
    name?: string; //name可选
    date: string; //必填
    sex: string;//必填
    action: void;//必填
    [propName:string]: any;  //任意属性：需要注意的是，一旦定义了任意属性，那么确定属性和可选属性都必须是它的子属性
}

let obj1 : IPerson = {
    // name: 'dali',  //不写也不会报错
    date: '2022-02-23',
    sex: '男',
    action: undefined,
    call: function(){}

}


interface SquareConfig {
    color?: string;
    width?: number;
  }
  
  function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
      // Error: Property 'clor' does not exist on type 'SquareConfig'
      newSquare.color = config.color;
    }
    if (config.width) {
      newSquare.area = config.width * config.width;
    }
    return newSquare;
  }
  
  let mySquare = createSquare({color: "black"});


//只读属性

interface IReadOnly {
    readonly name: string;
    readonly age: number
}

let p:IReadOnly = {
    name: 'dali',
    age: 22
}

// p.name = 'dsf76'
console.log(p.name)

let ro:ReadonlyArray<number> = [1,2]
//ro是只读数组

let arr100:(string | number)[] = [1, 2, 3, 'sf']
let arr101:Array<string | number> = [1, 2, 3, 'sf']

