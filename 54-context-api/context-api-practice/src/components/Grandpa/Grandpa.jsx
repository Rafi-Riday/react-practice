import React, { useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import { DemoContext, RingContext } from '../../contexts/Context';

const Grandpa = () => {
    const [house, setHouse] = useState(7);
    const specialRing = 'Diamond Ring';
    return (
        <div style={{ margin: '20px', }} className='parent'>
            <h3>Grandpa</h3>
            <section>
                <RingContext.Provider value={specialRing}>
                    <DemoContext.Provider value={{ house, setHouse }}>
                        <Father />
                        <Uncle />
                        <Aunty />
                    </DemoContext.Provider>
                </RingContext.Provider>
            </section>
        </div>
    );
};

export default Grandpa;