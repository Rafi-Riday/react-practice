import React from 'react';
import { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`)
            .then(res => res.json())
            .then(data => {
                data.sort((a, b) => (b.population / b.area) - (a.population / a.area));
                data.map(country => country.name.common === 'Israel' ? country.name.common = '!$®@3₤' : void (0));
                setCountries(data);
            })
    }, []);
    return (
        <div className='countries'>
            {
                countries.map(country => <Country
                    country={country}
                    key={country.cca3}
                />)
            }
        </div>
    );
};

export default Countries;