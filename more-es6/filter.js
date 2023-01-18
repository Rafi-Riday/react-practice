const ages = [12, 34, 87, 34, 65, 23, 54, 78, 34, 56];
const old = ages.filter(x => x > 60);
const youth = ages.filter(x => x > 18 && x <= 60);
const teen = ages.filter(x => x <= 18);
console.log(old);
console.log(youth);
console.log(teen);