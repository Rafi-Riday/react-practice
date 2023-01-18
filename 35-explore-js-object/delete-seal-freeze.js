const student = {
    name: 'abul',
    age: 25,
    money: 5000,
}

console.log(student);

delete student.name;
console.log(student);

const { money, ...anotherObjectWithOutMoney } = student;
console.log(student);
console.log(anotherObjectWithOutMoney);

Object.seal(student);
student.name = 'asd';
student.age = 12;
console.log(student);

Object.freeze(student);
student.name = 'www';
student.age = 88;
console.log(student);
