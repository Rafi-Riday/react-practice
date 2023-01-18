import React, { useContext } from 'react';
import { RingContext } from '../../contexts/Context';

const CousinsSpecial = () => {
    const specialRing = useContext(RingContext);
    return (
        <div className='parent'>
            <h3>Cousins Special</h3>
            <small><div>Gift : <b>{specialRing}</b></div></small>
        </div>
    );
};

export default CousinsSpecial;