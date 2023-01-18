// variables
var int_variable = 69;
var str_variable = 'I love 69';
var isLoving69 = true;
console.log(int_variable, str_variable, isLoving69);

// shorthands
var n = 69;
console.log(n);
n += 1;
console.log(n);
n -= 1;
console.log(n);
n *= 2;
console.log(n);
n /= 2;
console.log(n);
n++;
console.log(n);
n--;
console.log(n);
var reminder_2 = n % 2;
console.log(reminder_2);
var reminder_3 = n % 3;
console.log(reminder_3);

// type conversion
var iAmString = '69.05';
console.log(iAmString);
var iAmInt = parseInt(iAmString);
console.log(iAmInt);
var iAmFloat = parseFloat(iAmString);
console.log(iAmFloat);

// typeof value
var iAmString = '69.05';
console.log(typeof iAmString);
var iAmInt = parseInt(iAmString);
console.log(typeof iAmInt);
var iAmFloat = parseFloat(iAmString);
console.log(typeof iAmFloat);

// toFixed
var n1 = 0.1;
var n2 = 0.2;
var result = n1 + n2;
console.log(result);

// result = result.toFixed(2);
result = parseFloat(result.toFixed(2));
console.log(result);
console.log(result);

// reminder %
console.log(12 % 3);
console.log(12 % 4);
console.log(12 % 6);
console.log(12 % 12);
console.log(12 % 10);
console.log(17 % 7);

// array
var array = [0, 1, 2, 3, 4, 5, 6];
console.log(array);
console.log(array.length);
console.log(array[3]);

// set by index
var array = [0, 1, 2, 3, 4, 5, 6];
console.log(array[4]);
array[4] = 69;
console.log(array[4]);

// indexOf
var array = [0, 3, 12, 69, 4, 5, 6];
var indexOfVariable = array.indexOf(69);
console.log(indexOfVariable);

// push -> add items in last of array
// pop -> remove items from last of array
// ubshift -> add items in first of array
// shift -> remove items from first of array
var array = [0, 3, 12, 6, 4, 5, 69];
array.push(96)
console.log(array);
array.pop()
console.log(array);
array.unshift(45)
console.log(array);
array.shift()
console.log(array);

// comparison
console.log(69 > 96);
console.log(69 < 96);
console.log(69 == 96);
console.log(69 == 69);
console.log(69 != 96);
console.log(70 >= 70);
console.log(69 <= 70);

// conditional -> structure
if (69 < 96) {
    console.log('I love 69')
}
else {
    console.log('I love infinite')
}
// conditional -> manage multi condition
if ((69 < 96 || 609 < 112) && 10 < 69 < 100) {
    console.log('I love 69')
}
else {
    console.log('I love infinite')
}
// conditional -> manage multi stage
if (69 > 96) {
    console.log('I love 69')
}
else if (12 == 12) {
    console.log('I love 12')
}
else {
    console.log('I love infinite')
}
// nested condition
if (69 < 96) {
    if (12 == 102) {
        console.log('I love 69')
    }
    else if (12 != 102) {
        console.log('I love 102')
    }
}
else {
    console.log('I love infinite')
}

