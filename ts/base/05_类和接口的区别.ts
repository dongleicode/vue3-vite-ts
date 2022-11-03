
/***
 * 类和接口的区别
 * 接口是对类的行为进行约束，而类是代码复用
 * 接口只生命和类型定义，不做实现
 * 
 */

 interface IObj {
    name: string;
    age:number
}

//类实现接口
class Student implements IObj {
    name: string;
    age: number;
    action(){

    }
}


//把类当接口来实现
class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};