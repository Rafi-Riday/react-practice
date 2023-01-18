/***********
Practice Problem map(), filter(), find()
***********/
/* 1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number. */
const odd1 = [1, 3, 5, 7, 9];
const even1 = odd1.map(x => x + 1);
// console.log(even1);

/* 2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
return/get all the elements which are divisible by 10 using
array.filter() method. */
const arrayAllNumber = [33, 50, 79, 78, 90, 101, 30];
const divisibleBy10 = arrayAllNumber.filter(x => x % 10 == 0);
// console.log(divisibleBy10);

/* 3) Now do the same task of question 2. But do this using array.find()
method. Then compare the output of question 2 & question 3. */
const divisibleBy10First = arrayAllNumber.find(x => x % 10 == 0);
// console.log(divisibleBy10First);

/***********
Practice Problem reduce()
***********/
/* 1) You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method. */
const array1 = [1, 9, 17, 22];
const sum = array1.reduce((s, x) => s + x, 0);
// console.log(sum);

/* 2)
const people = [
    {name: 'Mina', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Shuchorita', age: 22},
];

Challenging Follow above array of objects. So, you have 3 objects as
array element. Can you find out the total sum from here?

20 + 15 + 22 = 57 . The output will be 57

What are you thinking? Yeah! Do it with for loop. I know you can do it.
But! Wait !! Wait !!! Do the same task using array.reduce() method. */
const people = [
    { name: 'Mina', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Shuchorita', age: 22 },
];
const sumAge = people.reduce((s, x) => s + x.age, 0);
// console.log(sumAge);

/***********
Practice Problem: Access Object Values
***********/
/*
Challenging
● Console the value of email
● Console the value of address
● Console the value of city
● Console the value of lat
● Console the value of company name
*/
const user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}
// console.log(user['email']);
// console.log(user['address']);
// console.log(user['address']['city']);
// console.log(user['address']['geo']['lat']);
// console.log(user['company']['name']);
