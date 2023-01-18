const loadCountriesData = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countriesData => displayData(countriesData))
}

const displayData = countriesData => {
    const countryContainer = document.getElementById('country-container');
    const countriesHTML = countriesData.map(country => returnHTML(country));
    countryContainer.innerHTML = countriesHTML.join('');
}

const returnHTML = ({ flags, name, capital, population, area }) => {
    return `
    <div class="country">
        <img src="${flags.svg}">
        <h2>${name.common}</h2>
        <p>Capital : ${capital ? capital.join(', ') : 'No Capital'}</p>
        <p>Population : ${population}</p>
        <p>Area : ${area} km<sup>2</sup></p>
    </div>
    `
}

loadCountriesData();
