/* // celcius   ---> farenheit
const celciusToFarenheit = (c) => (c * 9 / 5) + 32;
// farenheit ---> celcius
const farenheitToCelcius = (f) => (f - 32) * 5 / 9;

console.log(celciusToFarenheit(15));
console.log(farenheitToCelcius(100)); */

// simple interest : principal, interest rate(only the percentage number), time(year) --> interest amount
const simpleInterest = (p, r, t) => p * r * t / 100;

console.log(simpleInterest(2000, 9, 1));

// compound interest : principal, interest rate(only the percentage number), time(year), n --> interest amount
// n is the number of times that interest is compounded per unit t, for example if interest is compounded monthly and t is in years then the value of n would be 12. If interest is compounded quarterly and t is in years then the value of n would be 4

const compoundInterest = (p, r, t, n) => p * Math.pow(1 + r / n, n * t) - p;
console.log(compoundInterest(2000, .08, 1, 12));
