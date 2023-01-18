function sum(i) {
    if (i === -10) {
        return i;
    }
    return i + sum(i - 1);
}
console.log(sum(5));

// factorial
function factorial(i) {
    if (i === 1) {
        return i;
    }
    return i * factorial(i - 1);
}
console.log(factorial(5));
