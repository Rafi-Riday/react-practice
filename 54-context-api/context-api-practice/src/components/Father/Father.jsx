import React from 'react';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = () => {
    return (
        <div className='parent'>
            <h3>Father</h3>
            <section>
                <Myself />
                <Sister />
            </section>
        </div>
    );
};

export default Father;