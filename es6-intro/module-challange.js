/*
Practice Problem 2

Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the name of your friends
b) Check if the length of each element is even, push elements with even length to a new array and return the result
c) Print the result.
*/
const evenFriends = (arrayOfFriends) => {
    const evenFriendsArray = [];
    for (const friend of arrayOfFriends) {
        if (friend.length % 2 === 0) {
            evenFriendsArray.push(friend);
        }
    }
    return evenFriendsArray;
}
// console.log(evenFriends(['asd', 'aabb', 'asdasd', 'asd']));

/*
Practice Problem 3

Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
Print the result. 
*/
const sumOfSquaredElement = (arrayOfNumbers) => {
    let sum = 0;
    for (const number of arrayOfNumbers) {
        sum += Math.pow(number, 2);
    }
    return sum / 2;
}
// console.log(sumOfSquaredElement([2, 5, 3, 8, 9]));

/*
Practice Problem 4

Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result
Print the result. 
*/
const returnMaxOfTwo = (array1, array2) => {
    const array3 = [...array1, ...array2];
    return Math.max(...array3);
}
const array1 = [45, 83, 23, 65, 67, 12, 45, 67, 34];
const array2 = [43, 23, 65, 23, 76, 34, 56, 79, 43];
console.log(returnMaxOfTwo(array1, array2));
