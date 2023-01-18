/**************************************************/
// Practice Problem 1
// You are given an array:
var fruits = ['Apple', 'Banana', 'Orange'];
// a) Find the index of 'Banana' and replace 'Banana' with 'Mango'.
var indexOfBanana = fruits.indexOf('Banana');
console.log(indexOfBanana);
fruits[indexOfBanana] = 'Mango';
console.log(fruits);
// b) Remove 'Orange' and add 'Watermelon'.
fruits.pop();
console.log(fruits);
fruits.push('Watermelon');
console.log(fruits);
/**************************************************/
// Practice Problem 2
// You and your friends Tom, Jane, Peter and John got their final exam results. Your total
// score is 85, Tom's total score is 66, Jane's total score is 95, Peter's total score is 56
// and John's total score is 40. The grading chart is
// 80 or above => A grade
// 60 or above => B grade
// 50 or above => C grade
// 40 or above => D grade
// 39 or less  => F grade
// Write a program to find your and your friends' grades using if-else.
var number = 85;
if (number >= 80) {
    var grade = 'A';
}
else if (number >= 60) {
    var grade = 'B';
}
else if (number >= 50) {
    var grade = 'C';
}
else if (number >= 40) {
    var grade = 'D';
}
else {
    var grade = 'F';
}
console.log(grade)
/**************************************************/
// Practice Problem 3
// 1. You are given three numbers 13, 79, and 45. Write a program that will print the
// largest number using if-else.
var a = 13;
var b = 79;
var c = 45;
if (a > b && a > c) {
    console.log('Largest number is a : ' + a);
}
else if (b > c) {
    console.log('Largest number is b : ' + b);
}
else {
    console.log('Largest number is c : ' + c);
}
// 2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
// triangle is Isosceles or not using if-else.
// Isosceles => two sides are equal
var sideA = 9;
var sideB = 8;
var sideC = 9;
if (sideA == sideB || sideB == sideC || sideC == sideA) {
    console.log('The triangle is Isosceles');
}
else {
    console.log('The triangle is not Isosceles');
}
/**************************************************/