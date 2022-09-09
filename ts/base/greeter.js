var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return 'hello, ' + person.firstName + person.lastName;
}
// let user = 'jane user'
// let user = [1, 2, 3]
var user = new Student('jane', 'M', "user");
document.body.innerHTML = greeter(user);
