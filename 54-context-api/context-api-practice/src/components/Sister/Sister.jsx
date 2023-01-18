import React, { useContext } from 'react';
import { DemoContext } from '../../contexts/Context';

const Sister = () => {
    const { house, setHouse } = useContext(DemoContext);
    return (
        <div className='parent'>
            <h3>Sister</h3>
            <p>{house}</p>
            <button onClick={() => setHouse(house + 1)}>Increase House</button>
        </div>
    );
};

export default Sister;