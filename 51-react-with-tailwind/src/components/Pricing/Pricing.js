import React from 'react';
import { CheckCircleIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';

const Pricing = ({ price }) => {
    return (
        <div className='w-full text-center bg-indigo-400 text-white rounded-3xl p-3 py-5 flex flex-col justify-between items-center gap-3'>
            <div className='flex flex-col gap-3'>
                <div>
                    <span className='text-5xl font-extrabold'>{price.price} $</span>/per month
                </div>
                <div className='text-2xl font-medium text-amber-200'>{price.plan}</div>
                <div className='flex flex-col items-start'>
                    {
                        price.features.map((feature, idx) => <div key={idx} className='flex justify-center items-center gap-2'><CheckCircleIcon className='w-5 h-5 text-white' /><span>{feature}</span></div>)
                    }
                </div>
            </div>
            <button className='bg-white text-indigo-400 hover:bg-slate-300 hover:text-indigo-500 duration-300 px-3 py-2 rounded-xl flex items-center gap-1'>Buy Now <ShoppingCartIcon className='w-4 h-4' /></button>
        </div>
    );
};

export default Pricing;