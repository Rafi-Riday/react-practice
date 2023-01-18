import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Order from '../Order/Order';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);
    const handleAddToCart = tshirt => {
        const exists = cart.find(ts => ts._id === tshirt._id);
        if (exists) {
            alert(`"${tshirt.name}" already exists!`);
        } else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
    };
    const handleRemoveFromCart = tshirt => {
        const remaining = cart.filter(ts => ts._id !== tshirt._id);
        setCart(remaining);
    }

    return (
        <div className='w-full grid grid-cols-4'>
            <div className='col-span-3 grid grid-cols-3 gap-5 m-5 mr-0'>
                {
                    tshirts.map(tshirt => <Order key={tshirt.index} handleAddToCart={handleAddToCart} tshirt={tshirt} />)
                }
            </div>
            <div className='p-5'>
                <Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart} />
            </div>
        </div>
    );
};

export default Home;