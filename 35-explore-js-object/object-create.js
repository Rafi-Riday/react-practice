// object literal
const newObject = {
    name: 'riday',
    age: 20,
}
console.log(newObject);

// create object using class
class CreateObject {
    name = 'riday';
    constructor(age) {
        this.age = age;
    }
}
const myNewObject = new CreateObject(20);
console.log(myNewObject);
