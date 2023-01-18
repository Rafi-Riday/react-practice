import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToCart } from '../../utilities/fakedb';
import './Shop.css';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {
    const { products, initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart);
    const addToCartUI = (selectedProduct) => {
        let newCart;
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity += 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToCart(selectedProduct.id);
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    // products.map(product => <Product product={product} addToCartUI={addToCartUI} key={product.id} />)
                    // // the upper line causes key error
                    products.map((product, idx) => <Product product={product} addToCartUI={addToCartUI} key={idx} />)
                    // // the upper line fixes the error
                }
            </div>
            <aside className='cart-container'>
                <Cart cart={cart} />
            </aside>
        </div>
    );
};

export default Shop;