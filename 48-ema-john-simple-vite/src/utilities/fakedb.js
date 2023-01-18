const addToCart = id => {
    if (!localStorage.getItem('shopping-cart-ema-john')) {
        localStorage.setItem('shopping-cart-ema-john', '{}');
    }
    const cartItems = JSON.parse(localStorage.getItem('shopping-cart-ema-john'));
    if (!!cartItems[id]) {
        cartItems[id] = cartItems[id] + 1;
    }
    else {
        cartItems[id] = 1;
    }
    localStorage.setItem('shopping-cart-ema-john', JSON.stringify(cartItems));
}
const removeFromCart = (id, command) => {
    if (!!localStorage.getItem('shopping-cart-ema-john')) {
        const cartItems = JSON.parse(localStorage.getItem('shopping-cart-ema-john'));
        if (!!cartItems[id]) {
            if (command === 'delete') {
                delete cartItems[id];
            }
            else if (command === 'minus') {
                if (cartItems[id] > 1) {
                    cartItems[id] = cartItems[id] - 1;
                } else {
                    delete cartItems[id];
                }
            }
            localStorage.setItem('shopping-cart-ema-john', JSON.stringify(cartItems));
        }
    }
}
const getStoredCart = () => {
    if (!!localStorage.getItem('shopping-cart-ema-john')) {
        return JSON.parse(localStorage.getItem('shopping-cart-ema-john'));
    }
}
export { addToCart, removeFromCart, getStoredCart };