// arrow function to check if input is number or not
const checkNumber = (number) => typeof number === 'number' ? true : false;

// console.log(checkNumber(0.0));

// execute operation from input
const operation = (n1, n2, command) => {
    // return new Function(`${n1} ${command} ${n2}`);
    try {
        const result = new Function(`return ${n1} ${command} ${n2}`);
        return (result());
    } catch (error) {
        console.log(error);
        return 'Invalid input';
    }
}

console.log(operation(10, 5, '+'));
console.log(operation(10, 5, '-'));
console.log(operation(10, 5, '*'));
console.log(operation(10, 5, '/'));
console.log(operation(10, 5, '%'));
console.log(operation('', 5, '%'));
console.log(operation(3, 5, 2));