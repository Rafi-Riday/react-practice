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
}

const anotherStudent = {
    name: 'Umme Habiba',
    subject: 'CSE',
    money: 10000,
}
// calling function
const newExam1 = student.exam.call(anotherStudent);
// applying function
const newExam2 = student.exam.apply(anotherStudent);
// creating new function
const newFunctionExam3 = student.exam.bind(anotherStudent);

console.log(newExam1);
console.log(newExam2);
console.log(newFunctionExam3());

const newTreat1 = student.treat.call(anotherStudent, 3000, 1000);
const newTreat2 = student.treat.apply(anotherStudent, [900, 100]);
const newFunctionTreat3 = student.treat.bind(anotherStudent);

console.log(newTreat1);
console.log(newTreat2);
console.log(newFunctionTreat3(1000, 1000));
