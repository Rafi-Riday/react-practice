// object
var days = {
    day1: 'sat',
    day2: 'sun',
    day3: 'mon',
    day4: 'tuse',
    day5: 'wed',
    day6: 'thurs',
    day7: 'fri',
}
console.log(days.day5);
console.log(days['day5']);
var dayVar = 'day5';
console.log(days[dayVar]);
days.day5 = 'Wednesday';
console.log(days.day5);

// get all keys & values
var dayKeyArray = Object.keys(days)
console.log(dayKeyArray);
var dayValueArray = Object.values(days)
console.log(dayValueArray);

// object looping 1
for (i = 0; i < dayKeyArray.length; i++) {
    console.log(dayKeyArray[i], dayValueArray[i]);
}

// object looping 2
for (i = 0; i < dayKeyArray.length; i++) {
    console.log(dayKeyArray[i], days[dayKeyArray[i]]);
}
// object looping 3 -> smart
for (i in days) {
    console.log(i, days[i]);
}