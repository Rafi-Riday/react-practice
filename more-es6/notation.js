const student = {
    name: 'riday',
    roll: 69,
    marks: {
        physics: 89,
        chemistry: 91,
        higherMath: 98,
    }
}
// system 1
const physics = student.marks.physics;
console.log(physics);
// system 2
const chemistry = student['marks']['chemistry'];
console.log(chemistry);
// system 3
const subject = 'higherMath';
const higherMath = student['marks'][subject];
console.log(higherMath);
