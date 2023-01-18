import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import OrderItem from '../OrderItem/OrderItem';
import './Orders.css';

const Orders = () => {
    const { products, initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart);
    const deleteItem = id => {
        const remainingCart = cart.filter(item => item.id !== id);
        setCart(remainingCart);
        removeFromCart(id, 'delete');
    }
    const minusItem = id => {
        const newCart = [...cart];
        const matchItem = newCart.find(item => item.id === id);
        if (matchItem) {
            if (matchItem.quantity > 1) {
                matchItem.quantity = matchItem.quantity - 1;
                setCart(newCart);
                removeFromCart(id, 'minus');
            } else {
                const remainingCart = cart.filter(item => item.id !== id);
                setCart(remainingCart);
                removeFromCart(id, 'delete');
            }
        }
    }
    return (
        <div className='shop-container'>
            <div className='order-container'>
                <div className="order-items">
                    {
                        cart.map(item => <OrderItem key={item.id} item={item} minusItem={minusItem} deleteItem={deleteItem} />)
                    }
                </div>
            </div>
            <aside className='cart-container'>
                <Cart cart={cart} />
            </aside>
        </div>
    );
};

export default Orders;