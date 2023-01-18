import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, population, area, region, flags } = props.country
    return (
        <div className='country'>
            <h2>Name : {name.common}</h2>
            <img src={flags.svg} alt={flags.svg.split('/')[3].split('.')[0]} />
            <p>Population : {population}</p>
            <p>Area : {area} km<sup>2</sup></p>
            <p>Density : {parseInt(population / area)} per km<sup>2</sup></p>
            <p><b>Region : {region}</b></p>
        </div>
    );
};

export default Country;