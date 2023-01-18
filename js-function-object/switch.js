var color = 'blue';

// instead of if-else statement, we will use switch
// when conditionals ar long, and
// the comparison is always `==` (not `<` or `>`)
/* if (color == 'red') {
    console.log('red');
}
else if (color == 'yellow') {
    console.log('yellow');
}
else if (color == 'black') {
    console.log('black');
}
else if (color == 'blue') {
    console.log('blue');
}
else if (color == 'maroon') {
    console.log('maroon');
}
else {
    console.log('colorless');
} */

switch (color) {
    case 'red':
        console.log('red');
        break;
    case 'yellow':
        console.log('yellow');
        break;
    case 'black':
        console.log('black');
        break;
    case 'blue':
        console.log('blue');
        break;
    case 'maroon':
        console.log('maroon');
        break;
    default:
        console.log('colorless');
}