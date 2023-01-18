const dataContainer = document.getElementById('data-container');

const getData = async (searchText, shortResultValue) => {
    const loadingContainer = document.getElementById('loading-container');
    loadingContainer.classList.remove('d-none');
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
        const data = await res.json();
        data.data.length === 0 ? displayNoData() : shortResultValue && data.data.length > 6 ? displayData(data.data.slice(0, 6), true) : displayData(data.data, false);
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
                    <img src="${data.image}" class="card-img-top" alt="${data}">
                    <div class="card-body">
                        <h5 class="card-title">${data.brand} ${data.phone_name}</h5>
                        </div>
                        <button onclick="showDataDetails('${data.slug}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#data-details">
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
    fetch(`https://openapi.programming-hero.com/api/phone/${dataId}`)
        .then(res => res.json())
        .then(details => setDetails(details.data))

    const setDetails = (details) => {
        dataDetailsLabel.innerText = details.name;
        dataDetailsBody.innerHTML = `
            <p><b>Display Size</b> : ${details.mainFeatures.displaySize}</p>
            <p><b>Storage</b> : ${details.mainFeatures.storage}</p>
            <p><b>Memory</b> : ${details.mainFeatures.memory}</p>
            <p><b>Chip Set</b> : ${details.mainFeatures.chipSet}</p>
            <p><b>Sensors</b> : ${details.mainFeatures.sensors.join(', ')}</p>
            <p><b>Release Date</b> : ${details.releaseDate}</p>
        `;
    }
}

