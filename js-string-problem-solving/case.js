// .toLowerCase() .toUpperCase()
// .toLocaleLowerCase() .toLocaleUpperCase()
let stringA = 'RiDay';
let stringB = 'riday';

if (stringA == stringB) {
    console.log('valid');
}
else {
    console.log('in-valid');
}

if (stringA.toLowerCase() == stringB.toLowerCase()) {
    console.log('valid');
}
else {
    console.log('in-valid');
}