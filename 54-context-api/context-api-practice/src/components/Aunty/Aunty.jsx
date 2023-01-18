import React from 'react';
import Cousine from '../Cousine/Cousine';
import CousineWithSpecial from '../CousineWithSpecial/CousineWithSpecial';

const Aunty = () => {
    return (
        <div className='parent'>
            <h3>Aunty</h3>
            <section>
                <Cousine />
                <Cousine />
                <CousineWithSpecial />
            </section>
        </div>
    );
};

export default Aunty;