const date1 = new Date('1971-1-30');
const date2 = new Date('1971-5-25');

if (date1.getTime() < date2.getTime()) {
    console.log('I am bigger');
}
else {
    console.log('I am smaller');
}
