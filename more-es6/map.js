const array1 = [1, 2, 3, 4, 5];
// function to return array of doubled numbers
// normal function
function returnDoubled(numArray) {
    const output = [];
    for (const num of numArray) {
        output.push(num * 2);
    }
    return output;
}
console.log(returnDoubled(array1));
// combination of normal function and arrow function
function returnDoubled2(numArray) {
    const output = [];
    for (const num of numArray) {
        const result = returnDoubleNumber(num);
        output.push(result);
    }
    return output;
}
const returnDoubleNumber = x => x * 2;
console.log(returnDoubled2(array1));
// using map with callback function
const result = array1.map(returnDoubleNumber);
console.log(result);
// using map with inline function
const result2 = array1.map(x => x * 2);
console.log(result2);
// using map with inline function : one line code
console.log([1, 2, 3, 4, 5].map(x => x * 2));