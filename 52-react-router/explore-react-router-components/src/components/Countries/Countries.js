import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';

const Countries = () => {
    const countries = useLoaderData();
    return (
        <div>
            <h3>Countries : {countries.length}</h3>
            {
                countries.map(country => <div key={country.cca3}><h3>{country.name.common}</h3><NavLink to={`/country/${(country.cca3).toString().toLowerCase()}`}>Details</NavLink></div>)
            }
        </div>
    );
};

export default Countries;