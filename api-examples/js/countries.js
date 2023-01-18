const loadCountriesData = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countriesData => {
            const countryContainer = document.getElementById('country-container');
            countriesData.forEach(country => {
                const countryDiv = document.createElement('div');
                countryDiv.classList.add('country');
                countryDiv.innerHTML = `
                    <h2>Name : ${country.name.common}</h2>
                    <button onclick="returnDetails('${country.cca2}')">Details</button>
                    `;
                countryContainer.appendChild(countryDiv);
            });
        })
}

const returnDetails = code => {
    const details = document.getElementById('details');
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
        .then(res => res.json())
        .then(array => {
            const country = array[0];
            details.innerHTML = `
                <img src="${country.flags.svg}" alt="${country.name.common}">
                <div>
                <h2>Name : ${country.name.common}</h2>
                <p>Capital : ${country.capital ? country.capital[0] : 'No Capital'}</p>
                <p>Region : ${country.region}</p>
                <p>Subregion : ${country.subregion ? country.subregion : 'No Subregion'}</p>
                <p>Population : ${country.population}</p>
                <p>Currencies : ${country.currencies ? Object.keys(country.currencies).join(', ') : 'No Currency'}</p>
                </div>
                `;
        })
}

// https://restcountries.com/v3.1/alpha/{code}

loadCountriesData();
