var numbers = [69, 2, 6, 3, 9, 69, 2, 0, 3, 69, 2, 5, 1, 7, 69];
for (i = 0; i < numbers.length; i++) {
    number = numbers[i];
    if (number == 69) {
        continue;
    }
    console.log(number);
}