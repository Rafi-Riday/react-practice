"use strict";
function returnSum(num1, num2) {
    return num1 + num2;
}
function logSum(num1, num2) {
    console.log(num1 + num2);
}
var logSumArrowFunc = function (num1, num2) {
    return num1 + num2;
};
var logSumDefaultValue = function (num1, num2, num3) {
    if (num3 === void 0) { num3 = 0; }
    return num1 + num2 + num3;
};
console.log(returnSum(10, 20));
logSum(12, 12);
console.log(logSumArrowFunc(10, 30));
console.log(logSumDefaultValue(12, 13));
var func2 = function (num1, num2) {
    return num1 + num2;
};
console.log(func2(10, 12));
var func3 = function (numArray) {
    return numArray.reduce(function (prev, curr) { return prev + curr; }, 0);
};
console.log(func3([10, 12, 12]));
var funcSignature;
funcSignature = function (num1, num2, num3) {
    if (num3 === void 0) { num3 = 0; }
    return num1 + num2 + num3;
};
