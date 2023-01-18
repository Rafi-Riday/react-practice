const API_KEY = `389b0e9f3a59b5d0d18d0c6ac34f9fa2`;

const searchInputBtn = document.getElementById('searchInputBtn');
const searchInput = document.getElementById('searchInput');
const searchCity = document.getElementById('searchCity');
const tempC = document.getElementById('tempC');
const cloudCount = document.getElementById('cloudCount');
const humidity = document.getElementById('humidity');
const country = document.getElementById('country');

const getWeatherData = (searchCityInput) => {
    try {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCityInput}&appid=${API_KEY}&units=metric`)
            .then(res => res.json())
            .then(data => displayData(data))
    } catch (error) {
        console.log(error);
    }
}

const displayData = (data) => {
    searchCity.innerText = `${data.name ? data.name : searchInput.value === '' ? 'Search Temperature by City Name' : data.message}`;
    // Search Temperature by City Name

    // data.name ? searchCity.innerText = data.name : data.message === 'Nothing to geocode' ? 'Search Temperature by City Name' : data.message;

    data.main ? (tempC.innerText = data.main.temp, tempC.parentElement.style.display = 'block') : (tempC.innerText = '', tempC.parentElement.style.display = 'none');

    data.clouds ? (cloudCount.innerText = data.clouds.all, cloudCount.parentElement.style.display = 'block') : (cloudCount.innerText = '', cloudCount.parentElement.style.display = 'none');

    data.main ? (humidity.innerText = data.main.humidity, humidity.parentElement.style.display = 'block') : (humidity.innerText = '', humidity.parentElement.style.display = 'none');

    data.sys ? (getCountryName(data.sys.country, country), country.parentElement.style.display = 'block') : (country.innerText = '', country.parentElement.style.display = 'none');
}

const getCountryName = async (code, countryContainer) => {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
    const data = await res.json();
    countryContainer.innerText = data[0].name.common;
}

searchInput.addEventListener('keyup', function (event) {
    getWeatherData(searchInput.value);
})

searchInputBtn.addEventListener('click', function () {
    getWeatherData(searchInput.value);
})
