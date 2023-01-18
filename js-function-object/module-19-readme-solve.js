// 1. multiplication table
function multiplicationTable(n) {
    for (i = 1; i <= 10; i++) {
        console.log(i, 'x', n, '=', i * n);
    }
}
multiplicationTable(13);

// 2. reguler case -> lower case
function convertLowerCase(inputString) {
    return inputString.toLowerCase();
}
stringToInput = 'My name is Rafiul Hossain Riday';
console.log(convertLowerCase(stringToInput));

// 3. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে।
function fullName(name1, name2) {
    var name = name1 + name2;
    return name;
}
var name1 = 'Rafiul Hossain';
var name2 = 'Riday';
console.log(name1, name2);

// return square of a number
function returnSquare(n) {
    return Math.pow(n, 2);
}
console.log(returnSquare(5));

// print pepperoni
const pizza = {
    toppings: ['cheese', 'sauce', 'pepperoni'],
    crust: 'deep dish',
    serves: 2,
}
console.log(pizza['toppings'][2]);
console.log(pizza.toppings[2]);
