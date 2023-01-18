const addToCart = id => {
    if (!localStorage.getItem('shopping-cart')) {
        localStorage.setItem('shopping-cart', '{}');
    }
    const cartItems = JSON.parse(localStorage.getItem('shopping-cart'));
    if (!!cartItems[id]) {
        cartItems[id] = cartItems[id] + 1;
    }
    else {
        cartItems[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(cartItems));
}
const removeFromCart = id => {
    if (!!localStorage.getItem('shopping-cart')) {
        const cartItems = JSON.parse(localStorage.getItem('shopping-cart'));
        if (!!cartItems[id]) {
            if (cartItems[id] > 1) {
                cartItems[id] = cartItems[id] - 1;
            }
            else {
                delete cartItems[id];
            }
            localStorage.setItem('shopping-cart', JSON.stringify(cartItems));
        }
    }
}
export { addToCart, removeFromCart };