import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phone = () => {
    const { name, description, price, image } = useLoaderData();
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '3rem', }}>
            <img style={{ width: '200px', }} src={image} alt={name} />
            <h2><b>Phone :</b> {name}</h2>
            <div><b>Price :</b> <span style={{ color: 'orangered' }}>{price}</span></div>
            <div><b>Description :</b> {description}</div>
        </div>
    );
};

export default Phone;