// Find Leap Year
// Write a function findLeapYear() that will take the array [2023,2024,2025,2028,2030] as the input parameter and will check if each year is a leap year. If a year is a leap year insert that year in a new array, return the new array and print the result.

function isLeapYear(year) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        if (year % 4 === 0) {
            return true;
        }
        else {
            return false;
        }
    }
}

function findLeapYear(yearArray) {
    leapYearArray = [];
    for (let i = 0; i < yearArray.length; i++) {
        if (isLeapYear(yearArray[i]) == true) {
            // console.log(yearArray[i]);
            leapYearArray.push(yearArray[i]);
        }
    }
    return leapYearArray;
}
let yearList = [2023, 2024, 2025, 2028, 2030];
console.log(findLeapYear(yearList));