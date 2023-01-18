const object1 = {
    name: 'i dont know',
    phone: '01700000000',
    address: 'patal-puri',
}

// const { name, phone, address } = object1;
// console.log(name, phone, address);

const { name: nameObject1, phone: phoneObject1, address: addressObject1 } = object1;
console.log(nameObject1, phoneObject1, addressObject1);

const array1 = ['i dont know', '01700000000', 'patal-puri',];

const [nameArray1, phoneArray1, addressArray1] = array1;
console.log(nameArray1, phoneArray1, addressArray1);

const { a, b, ...c } = { a: 45, b: 21, x: 69, y: 96 }
console.log(a, b, c);
const [i, j, ...k] = [45, 21, 69, 96]
console.log(i, j, k);
