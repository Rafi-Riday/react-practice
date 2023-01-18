const student = {
    name: 'riday',
    money: 5000,
    subject: 'CSE',
    exam: function () {
        return `${this.name} is participating in ${this.subject} exam`;
    },
    treat: function (main, tip) {
        this.money -= (main + tip);
        return this.money;
    },
    method1: function () {
        console.log('method 1 console');
        return this.method2();
    },
    method2: function () {
        console.log('method 2 console');
        return 'method 2 return';
    },
}

console.log(student);
console.log(student.name);
console.log(student.treat(1900, 100));
console.log(student.exam());
console.log(student.method1());
console.log();
console.log(student.method2());
