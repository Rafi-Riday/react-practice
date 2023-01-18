const objA = { a: 'a', b: 'b', };
const objB = { a: 'a', b: 'b', };
const objC = { a: 'a', b: 'bbbbbbbbbbbbbb', };
const objD = objB;
const objE = { a: 'a', b: 'b', c: 'c', };
// not right
// objA === objB ? console.log(true) : console.log(false);
// not good
// JSON.stringify(objA) === JSON.stringify(objB) ? console.log(true) : console.log(false);
// better
const compareObject = (firstObject, secondObject) => {
    if (Object.keys(firstObject).length === Object.keys(secondObject).length) {
        for (const key in firstObject) {
            if (firstObject[key] !== secondObject[key]) {
                return false;
            }
        }
        return true;
    }
    return false;
}
console.log(compareObject(objA, objB));
console.log(compareObject(objA, objC));
console.log(compareObject(objA, objD));
console.log(compareObject(objA, objE));
