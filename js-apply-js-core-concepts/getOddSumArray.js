// Get Sum of Odd Numbers in Array
function getOddSumArray(numberList) {
    let sum = 0;
    for (let i = 0; i < numberList.length; i++) {
        const number = numberList[i];
        if (number % 2 !== 0) {
            sum += number;
        }
    }
    return sum;
}
let numberList = [5, 7, 8, 10, 45, 30];
let numberListAnother = [12, 58, 5, 8, 7, 8, 90, 2, 14, 60, 9, 69];
console.log(getOddSumArray(numberList));
