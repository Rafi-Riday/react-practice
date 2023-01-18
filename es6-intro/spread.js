const numbers = ['12', '45', '96', '69'];
console.log(isNaN(...numbers));
console.log(...numbers);

const array1 = [1, 2, 3, 4];
// wrong
const array2 = array1;
array1.push(69);
array2.push(96);
console.log(array1);
console.log(array2);
// right
const array3 = [...array1];
array1.push(100);
array3.push(555);
console.log(array1);
console.log(array3);

const array4 = [3, 4, 5];
const array5 = [1, 2, ...array4, 6, 7];
console.log(array4);
console.log(array5);
