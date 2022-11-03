//泛型
//1.可选参数
//可选参数后面不允许出现必选参数
//设置默认值
function fn1(x, y) {
    if (x === void 0) { x = 1; }
    if (y) {
        return x + y;
    }
    return x;
}
fn1(3, 4);
function fn2(o) {
    console.log(o.name);
}
var o1 = { id: 1, name: 's' };
fn2(o1);
//泛型
//函数声明
function sum(x, y) {
    return [x, y];
}
//函数表达式
var fn3 = function (x, y) {
    return [x, y];
};
//箭头函数
var es6 = function (x, y) { return [x, y]; };
function fn4(str) {
    return str.length;
}
fn4('sdflj');
var o9 = function (x, y) {
    return x == y;
};
o9(111, 12);
var o10 = function (x, y) {
    return x == y;
};
o10(1, 12);
var f11;
f11 = function (x, y) {
    return x == y;
};
f11(1, 2);
//泛型在类中的运用
var A2 = /** @class */ (function () {
    function A2(num) {
        this.n = num;
    }
    A2.prototype.add = function (x) {
        return x;
    };
    return A2;
}());
var a11 = new A2(1);
a11.add(3);
//多个类型参数
function multi(sum) {
    return [sum[1], sum[0]];
}
multi([1, 'one']);
var createArray5;
createArray5 = function (length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
};
createArray5(3, 'x');
var createArray6;
createArray6 = function (length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
};
createArray6(3, 'x');
/**
 * 枚举
enum类型是对JavaScript标准数据类型的一个补充
对于数组中获取数据，只能通过数组来获取，不能通过名称来获取


 */
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
var a1 = Color.red;
console.log(a1);
