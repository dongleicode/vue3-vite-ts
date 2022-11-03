//类:
var arr = [1, 23, 5];
var s = 'demo';
var a3 = 12;
var id = 123;
var str = 123;
var a1 = [2, 3];
var a2 = [2, 3];
var tom = {
    name: 'dali',
    age: 12,
    sex: 123
};
//参数类型处理：
function sum(x, y) {
    return x + y;
}
function f(x, y) {
    if (x < y) {
    }
    else {
    }
}
//泛型Genrics：可是未指定类型，用的时候才指定
function fn(x, y) {
    return [x, y];
}
fn('1', '2');
fn(1, 2);
fn(true, false);
fn('21', 23);
var mi = {
    mic: 'android',
    camera: true,
    call: function () {
        return 'call';
    }
};
var obj1 = {
    // name: 'dali',  //不写也不会报错
    date: '2022-02-23',
    sex: '男',
    action: undefined,
    call: function () { }
};
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        // Error: Property 'clor' does not exist on type 'SquareConfig'
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
var p = {
    name: 'dali',
    age: 22
};
// p.name = 'dsf76'
console.log(p.name);
var ro = [1, 2];
//ro是只读数组
