// performing task instead of returning anything
function sum(num1, num2) {
    console.log(num1, num2);
    sum = num1 + num2;
    console.log(sum);
}
sum(69, 96);
// returning value instead of performing task
function add(num1, num2) {
    add = num1 + num2;
    return add;
}
console.log(add(69, 96));