const newObjA = {
    a: 'a',
    b: 'b',
}
// wrong
const ObjACopy = newObjA;
ObjACopy.a = 'aaaaaa';
console.log(newObjA, ObjACopy);

const newObjC = {
    c: 'c',
    d: 'd',
}
// right : Shallow Copy
const ObjDCopy = { ...newObjC }
ObjDCopy.c = 'cccccc';
console.log(newObjC, ObjDCopy);

const data = {
    data: 'data',
}
// another right method but time consuming : Deep Copy
const dataCopy = JSON.parse(JSON.stringify(data));
dataCopy.data = 'newData';
console.log(data, dataCopy);
