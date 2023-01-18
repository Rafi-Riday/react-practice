//------------------------------------------------
//advantage of object
const more = {
    name: 'asd',
    array: [1, 2, 3, 4],
    object: {
        name: 'a',
        roll: '123',
    },
    func: function () {
        console.log('this is function in object');
    },
}
// console.log(more.name);
// console.log(more.array);
// console.log(more.object);
// more.func();

//------------------------------------------------
// array like object
const obj = {
    '0': 'a',
    1: 'b',
    2: 'c',
}
// console.log(obj['0']);
// console.log(obj[2]);
/* wrong */
// console.log(obj.1);

//------------------------------------------------
// arguments
function func(a, b) {
    console.log(a, b);
    console.log(arguments);
}
func(1, 2, 3, 4, 5);