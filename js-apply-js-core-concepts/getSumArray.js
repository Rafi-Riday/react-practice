// Get Sum of Array
function getSumArray(numberList) {
    let sum = 0;
    for (let i = 0; i < numberList.length; i++) {
        const number = numberList[i];
        sum += number;
    }
    return sum;
}
let numberList1 = [12, 53, 14, 60, 45, 69];
let numberList2 = [5, 5, 9, 1, 5, 2];
console.log(getSumArray(numberList1));
console.log(getSumArray(numberList2));
