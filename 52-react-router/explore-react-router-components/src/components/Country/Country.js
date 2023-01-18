import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Country = () => {
    const countryCCA3 = useLoaderData();
    const [countriesData, setCountriesData] = useState({});
    const { name, area, population, capital, region } = countriesData;
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`)
            .then(res => res.json())
            .then(dataList => {
                dataList.forEach(data => (data.cca3).toString().toLowerCase() === countryCCA3 ? setCountriesData(data) : void (0));
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div>
            <h3>Name : {name?.common}</h3>
            <p>Capital : {capital?.join(', ')}</p>
            <p>Population : {population} person</p>
            <p>Area : {area} km<sup>2</sup></p>
            <p>Region : {region}</p>
        </div>
    );
};

export default Country;