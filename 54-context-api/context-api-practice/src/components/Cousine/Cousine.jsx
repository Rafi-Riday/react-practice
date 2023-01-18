import React, { useContext } from 'react';
import { DemoContext } from '../../contexts/Context';

const Cousine = () => {
    const { house, setHouse } = useContext(DemoContext);
    return (
        <div className='parent'>
            <h3>Cousine</h3>
            <p>{house}</p>
            <button onClick={() => setHouse(house - 1)}>Decrease House</button>
        </div>
    );
};

export default Cousine;