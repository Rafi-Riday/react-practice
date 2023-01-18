import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div className='bg-slate-700 sticky top-5 text-center p-5 rounded-2xl'>
            <h4 className='font-bold text-xl'>Over Summery</h4>
            <div className='flex flex-col items-center justify-center my-5'>
                <div>
                    {
                        cart.map(ts => <div key={ts._id} className='text-left'>{ts.name} &nbsp;<button onClick={() => handleRemoveFromCart(ts)} className='btn btn-error btn-xs btn-circle'>X</button></div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;