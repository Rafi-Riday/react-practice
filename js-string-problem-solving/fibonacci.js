fibonacci = [0, 1];
for (let i = fibonacci.length; i <= 9; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}
console.log(fibonacci);