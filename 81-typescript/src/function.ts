function returnSum(num1: number, num2: number): number {
    return num1 + num2
}

function logSum(num1: number, num2: number): void {
    console.log(num1 + num2);
}

const logSumArrowFunc = (num1: number, num2: number): number => {
    return num1 + num2
}

const logSumDefaultValue = (num1: number, num2: number, num3 = 0): number => {
    return num1 + num2 + num3
}

console.log(returnSum(10, 20));
logSum(12, 12);
console.log(logSumArrowFunc(10, 30));
console.log(logSumDefaultValue(12, 13));

const func2 = (num1: number, num2: number): number => {
    return num1 + num2
}
console.log(func2(10, 12));

const func3 = (numArray: number[]): number => {
    return numArray.reduce((prev, curr) => prev + curr, 0);
}
console.log(func3([10, 12, 12]));

let funcSignature: (num1: number, num2: number, num3?: number) => number;
funcSignature = (num1, num2, num3 = 0) => {
    return num1 + num2 + num3
}