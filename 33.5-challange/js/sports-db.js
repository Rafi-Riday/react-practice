// https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${}

const getData = async (searchText) => {
    try {
        const res = await fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchText}`);
        const data = await res.json();
        displayData(data.player);
    }
    catch (error) {
        console.log(error);
    }
}

const displayData = (dataArray) => {
    console.log(dataArray);
    const dataContainer = document.getElementById('data-container');
    dataContainer.textContent = ``;
    dataArray.forEach(data => {
        const genderSelection = document.getElementById('gender-selection');
        if ((data.strGender === 'Male' && genderSelection.value === 'male') || (data.strGender === 'Female' && genderSelection.value === 'female') || (genderSelection.value === 'both')) {
            const dataDiv = document.createElement('div');
            const seeMore = ` <a href="#" class="text-primary pe-auto">...See More</a>`;
            dataDiv.classList.add('col');
            dataDiv.innerHTML = `
                <div class="card h-100">
                    <img src="${data.strThumb ? data.strThumb : 'img/default.png'}" class="card-img-top" alt="${data.strPlayer}">
                    <div class="card-body">
                        <h5 class="card-title">${data.strPlayer}</h5>
                        <hr>
                        <div class="card-text">Sport : ${data.strSport}</div>
                        <div class="card-text">Position : ${data.strPosition}</div>
                        <div class="card-text">Nationality : ${data.strNationality}</div>
                        <div class="card-text"></div>
                        <hr>
                        <p class="card-text">${data.strDescriptionEN ? data.strDescriptionEN.slice(0, 90) + seeMore : 'No Player Description'}</p>
                    </div>
                </div>
            `;
            dataContainer.appendChild(dataDiv);
        }
    });
}

const searchData = () => {
    const searchInput = document.getElementById('search-input');
    getData(searchInput.value);
}
