import React from 'react';
import Pricing from '../Pricing/Pricing';

const PricingContainer = () => {
    const pricingList = [
        {
            id: 1, plan: 'Free', price: 0, features: [
                'Free',
                'Ei Feature',
                'Sei Feature',
                'Oi Feature',
            ],
        },
        {
            id: 2, plan: 'Pro', price: 19.99, features: [
                'Pro',
                'Ei Feature',
                'Sei Feature',
                'Oi Feature',
                'Extreme Feature',
                'Pro Feature',
            ],
        },
        {
            id: 3, plan: 'Enterprise', price: 99.45, features: [
                'Enterprise',
                'Ei Feature',
                'Sei Feature',
                'Oi Feature',
                'Extreme Feature',
                'Pro Feature',
                'Ultra Pro Feature',
                'Ja chaiben tai Feature',
            ],
        },
    ];
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 gap-3'>
            {
                pricingList.map(price => <Pricing key={price.id} price={price} />)
            }
        </div>
    );
};

export default PricingContainer;