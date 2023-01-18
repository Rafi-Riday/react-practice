import React, { useContext } from 'react';
import { RingContext } from '../../contexts/Context';

const MySpecial = () => {
    const specialRing = useContext(RingContext);
    return (
        <div className='parent'>
            <h1>MySpecial</h1>
            <small><div>Gift : <b>{specialRing}</b></div></small>
        </div>
    );
};

export default MySpecial;