// swaping variable values
let a = 'aaa';
let b = 'bbb';
console.log(a, b);

// using temp variable
let temp = a;
a = b;
b = temp;
console.log(a, b);

// using destructuring
[a, b] = [b, a];
console.log(a, b);

// when all variable values are numeric --> using numeric operation
a = 12;
b = 18;
console.log(a, b);
a = a + b;
b = a - b;
a = a - b;
console.log(a, b);
