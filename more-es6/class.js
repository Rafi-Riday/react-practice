class Student {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    section = 'B';
    type = 'science';
    exam(subject) {
        console.log(`You ${subject} will start`);
    }
}
const riday = new Student('riday', 'chattogram')
console.log(riday['address']);
