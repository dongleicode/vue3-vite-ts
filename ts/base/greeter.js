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

*/
console.log('123');
create({ prop: 0 });
create(null);
