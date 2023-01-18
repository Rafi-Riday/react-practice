/*
https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${}
*/
const dataContainer = document.getElementById('data-container');

const getData = async (searchText, shortResultValue) => {
    const loadingContainer = document.getElementById('loading-container');
    loadingContainer.classList.remove('d-none');
    try {
        const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`);
        const data = await res.json();
        data.drinks.length === 0 ? displayNoData() : shortResultValue && data.drinks.length > 6 ? displayData(data.drinks.slice(0, 6), true) : displayData(data.drinks, false);
    }
    catch (error) {
        console.log(error);
        displayNoData();
    }
    loadingContainer.classList.add('d-none');
}

const displayNoData = () => {
    dataContainer.textContent = ``;
    dataContainer.innerHTML = `
    <div class="mt-5 text-white fs-1 w-100 text-center">No Search Result&nbsp;&nbsp;&nbsp;&nbsp;:-(</div>
    `;
}

const displayData = (dataArray, showAllBtn) => {
    dataContainer.textContent = ``;
    dataArray.forEach(data => {
        const dataDiv = document.createElement('div');
        dataDiv.classList.add('col');
        dataDiv.innerHTML = `
                <div class="card h-100 p-5">
                    <img src="${data.strDrinkThumb}" class="card-img-top" alt="${data.strDrink}">
                    <div class="card-body">
                        <h5 class="card-title">${data.strDrink}</h5>
                        </div>
                        <button onclick="showDataDetails('${data.idDrink}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#data-details">
                            Details
                        </button>
                </div>
            `;
        dataContainer.appendChild(dataDiv);
    });
    const showAllBtnDiv = document.createElement('div');
    showAllBtnDiv.classList.add('mb-5', 'w-100', 'text-center');
    showAllBtn ? showAllBtnDiv.classList.remove('d-none') : showAllBtnDiv.classList.add('d-none');
    showAllBtnDiv.innerHTML = `
    <button id="search-full-data" class="btn btn-primary">Show All</button>
    `;
    dataContainer.appendChild(showAllBtnDiv);
    document.getElementById('search-full-data').addEventListener('click', function () {
        const searchInput = document.getElementById('search-input');
        getData(searchInput.value, false);
    })
}

document.getElementById('search-less-data').addEventListener('click', function () {
    const searchInput = document.getElementById('search-input');
    getData(searchInput.value, true);
})

document.getElementById('search-input').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const searchInput = document.getElementById('search-input');
        getData(searchInput.value, true);
    }
})

const showDataDetails = (dataId) => {
    const dataDetailsLabel = document.getElementById('data-details-label');
    const dataDetailsBody = document.getElementById('data-details-body');
    // dataDetailsLabel.innerText = ``;
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${dataId}`)
        .then(res => res.json())
        .then(details => setDetails(details.drinks[0]))

    const setDetails = (details) => {
        dataDetailsLabel.innerText = details.strDrink;
        dataDetailsBody.innerHTML = `
            <p><b>Date Modified</b> : ${details.dateModified}</p>
            <p><b>Drink type</b> : ${details.strAlcoholic}</p>
            <p><b>Category</b> : ${details.strCategory}</p>
            <p><b>Glass</b> : ${details.strGlass}</p>
            <p><b>Instruction</b> : ${details.strInstructions}</p>
            <p id="details-modal" class="asd"><b>Tags</b> : ${details.strTags ? details.strTags.split(',').join(', ') : 'No Tags'}</p>
        `;
    }
}

