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
    return 'hello, ' + person.firstName + person.lastName
}

// let user = 'jane user'
// let user = [1, 2, 3]
let user = new Student('jane', 'M', "user")
document.body.innerHTML = greeter(user)