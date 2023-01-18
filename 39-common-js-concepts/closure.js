function counter() {
    let counter = 0;
    return () => counter++;
}

const a = counter();
const b = counter();
const c = counter();
const d = counter();

console.log(a());
console.log(a());
console.log(a());

console.log();

console.log(b());
console.log(b());
console.log(b());

console.log();

console.log(c());
console.log(c());
console.log(c());

console.log();

console.log(d());
console.log(d());
console.log(d());

console.log();
