// function to return max from list
function returnMax(list) {
    let max = list[0];
    for (let i = 0; i < list.length; i++) {
        if (max < list[i]) {
            max = list[i];
        }
    }
    return max;
}

// function to return min from list
function returnMin(list) {
    let min = list[0];
    for (let i = 0; i < list.length; i++) {
        if (min > list[i]) {
            min = list[i];
        }
    }
    return min;
}

const heightList = [112, 150, 137, 110, 185, 145, 191];
console.log(returnMax(heightList));
console.log(returnMin(heightList));