// Find Leap Year
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
console.log(isLeapYear(1600));
console.log(isLeapYear(2023));
console.log(isLeapYear(2024));
console.log(isLeapYear(2100));