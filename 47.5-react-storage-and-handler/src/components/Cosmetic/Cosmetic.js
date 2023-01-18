import React from 'react';
import { addToCart, removeFromCart } from '../../utilities/localdb';

const Component = (props) => {
    const { name, price, id } = props.cosmetic;
    return (
        <div>
            <h2>Name : {name}</h2>
            <p>Price : ${price}</p>
            <small>id : {id}</small>
            <br />
            <button onClick={() => addToCart(id)}>Add to cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Component;