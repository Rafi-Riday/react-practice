import React from 'react';
import Cousine from '../Cousine/Cousine';

const Uncle = () => {
    return (
        <div className='parent'>
            <h3>Uncle</h3>
            <section>
                <Cousine />
                <Cousine />
            </section>
        </div>
    );
};

export default Uncle;