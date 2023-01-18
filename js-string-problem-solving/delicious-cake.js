// from 3 inputs return max & min number

// return max number using if-else
let maxIfElse = (a, b, c) => {
    if (a > b && a > c) {
        return a;
    }
    else if (b > a && b > c) {
        return b;
    }
    else {
        return c;
    }
}

// return min number using if-else
let minIfElse = (a, b, c) => {
    if (a < b && a < c) {
        return a;
    }
    else if (b < a && b < c) {
        return b;
    }
    else {
        return c;
    }
}

// return max number using Math.max()
let maxMath = (a, b, c) => Math.max(a, b, c);

// return max number using Math.min()
let minMath = (a, b, c) => Math.min(a, b, c);

console.log(maxIfElse(87, 92, 97));
console.log(minIfElse(87, 92, 97));
console.log(maxMath(87, 92, 97));
console.log(minMath(87, 92, 97));
