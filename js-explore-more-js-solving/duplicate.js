const checkDuplicate = (array) => {
    const array2 = [];
    for (i = 0; i < array.length; i++) {
        if (array2.includes(array[i]) === false) {
            array2.push(array[i]);
        }
    }
    return array2
}
const arrayToCheck = [1, 4, 12, 34, 5, 1, 12, 34, 69, 12, 65, 65, 79, 1, 4];
console.log(checkDuplicate(arrayToCheck));