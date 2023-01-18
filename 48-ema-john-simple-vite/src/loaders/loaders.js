import { getStoredCart } from "../utilities/fakedb";
import { redirect } from "react-router-dom";

export const homeLoader = () => {
    return redirect("/shop");
};

export const productsAndCartLoader = async () => {
    // products
    const productsString = await fetch('data.json');
    const products = await productsString.json();
    // newCart
    const storedCart = getStoredCart();
    const initialCart = [];
    for (const id in storedCart) {
        const addedProductWithFullDetails = products.find(product => product.id === id);
        if (addedProductWithFullDetails) {
            addedProductWithFullDetails.quantity = storedCart[id];
            initialCart.push(addedProductWithFullDetails);
        }
    }
    return { products: products, initialCart: initialCart };
}
