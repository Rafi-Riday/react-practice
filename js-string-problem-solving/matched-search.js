// product description search
const products = [
    { id: 1, descrition: 'Phone Samsung Galaxy Pro Note 8', price: 65000 },
    { id: 2, descrition: 'PC DeskTop Samsung Pro', price: 98000 },
    { id: 3, descrition: 'PC Laptop levono Yoga', price: 78000 },
    { id: 4, descrition: 'Watch Apple Health', price: 5000 },
    { id: 5, descrition: 'Phone iPhone Apple 14', price: 120000 },
    { id: 6, descrition: 'PC Macbook Apple', price: 212000 },
    { id: 7, descrition: 'PC Macbook Air Apple', price: 260000 },
]
// searching function
function search(productsArray, searchKey) {
    const matched = [];
    for (const product of productsArray) {
        if (product.descrition.toLowerCase().includes(searchKey.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}
// console.log(search(products, 'PC'));
