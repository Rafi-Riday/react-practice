import React from 'react';

const Order = ({ tshirt, handleAddToCart }) => {
    const { _id, picture, name, price, } = tshirt;
    return (
        <div className="card w-full glass shadow-xl">
            <figure className="px-6 pt-6 pb-0">
                <img src={picture} alt="T shirts" className="rounded-xl w-full" />
            </figure>
            <div className="card-body p-6">
                <h2 className="card-title">{name}</h2>
                <p><b>Price</b> : $ {price}</p>
                <div className="card-actions flex justify-end">
                    <button onClick={() => handleAddToCart(tshirt)} className="btn btn-sm btn-error">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Order;