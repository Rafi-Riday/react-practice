"use strict";
var strAndNumArray = ['cse', 'eee'];
/**
 * an array accepting only string and number type data
 * can't insert bool type data,
 */
strAndNumArray.push('me'); // right
// newArray.push(12); // wrong
var strOrNumArray = ['ec', 'me'];
strOrNumArray = [69, 96];
console.log(strOrNumArray);
strOrNumArray = [true, false];
console.log(strOrNumArray);
strOrNumArray = ['ec', 'me'];
// strOrNumArray = ['ec', 12, false]; // wrong
/**
 * an array accepting only one type data which can be either string or number or boolean
 * all entered data needs to be same typed
 */
console.log(strAndNumArray);
console.log(strOrNumArray);
// Tuples
/**
 * Tuples are suitable to use for small range of data
 * fixed number of data needs to be entered
 */
var newTuple = ['str', false, 69, true, 'str'];
console.log(newTuple);
