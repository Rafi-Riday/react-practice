// object JSON
const user = {
    id: 1,
    name: 'gorib ameer',
    job: 'actor',
}
console.log(user);

const userJSON = JSON.stringify(user);
console.log(userJSON);

const userObj = JSON.parse(userJSON);
console.log(userObj);

// array JSON
const ages = [12, 23, 54, 15, 43, 54, 17];
console.log(ages);

console.log(agesJSON);
const agesJSON = JSON.stringify(ages);

console.log(agesObj);
const agesObj = JSON.parse(agesJSON);
