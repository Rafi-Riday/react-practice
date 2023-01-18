// https://www.themealdb.com/api/json/v1/1/search.php?s=${}

const getData = async (searchText) => {
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`);
        const data = await res.json();
        displayData(data.meals);
    }
    catch (error) {
        console.log(error);
    }
}

const displayData = (dataArray) => {
    const dataContainer = document.getElementById('data-container');
    dataContainer.textContent = ``;
    dataArray.forEach(data => {
        const dataDiv = document.createElement('div');
        dataDiv.classList.add('col');
        dataDiv.innerHTML = `
            <div class="card h-100">
                <img src="${data.strMealThumb}" class="card-img-top" alt="${data.strMeal}">
                <div class="card-body">
                    <h5 class="card-title">${data.strMeal}</h5>
                    <p class="card-text">${data.strInstructions.slice(0, 100)}...<a href="#" class="text-primary pe-auto">See More</a></p>
                </div>
            </div>
        `;
        dataContainer.appendChild(dataDiv);
    });
}

const searchData = () => {
    const searchInput = document.getElementById('search-input');
    getData(searchInput.value);
}
