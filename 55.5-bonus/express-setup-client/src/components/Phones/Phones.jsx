import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';

const Phones = () => {
    const phones = useLoaderData();
    return (
        <div>
            <h3>Phones : {phones.length}</h3>
            <p>Details of all phones :</p>
            {
                phones.map(phone => <NavLink key={phone.id} style={{ display: 'block' }} to={`/phones/${phone.id}`}>{phone.name}</NavLink>)
            }
        </div>
    );
};

export default Phones;