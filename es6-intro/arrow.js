// call function before function declare
console.log(add1(1, 2));
function add1(first, second) {
    return first + second;
}

const add2 = function add2(first, second) {
    return first + second;
}
// call function after function declare
console.log(add2(10, 20));

const add3 = (first, second) => first + second;
// call function after arrow function declare
console.log(add3(100, 200));