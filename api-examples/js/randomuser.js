const randomUserDataGenerator = () => {
    // fetch('https://randomuser.me/api/?gender=female')
    fetch('https://randomuser.me/api/?results=12')
        .then(res => res.json())
        .then(users => {
            const userContainer = document.getElementById('user-container');
            users.results.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.classList.add('random-user');
                userDiv.innerHTML = `
                    <img src="${user.picture.large}" alt="${user.name.title} ${user.name.first} ${user.name.last}">
                    <h2>Name : ${user.name.title} ${user.name.first} ${user.name.last}</h2>
                    <p>Gender : ${user.gender}</p>
                    <p>Phone : ${user.phone}</p>
                    <p>Email : ${user.email}</p>
                    <p>Location : ${user.location.city}, ${user.location.country}</p>
                `;
                userContainer.appendChild(userDiv);
            });
        })
}

randomUserDataGenerator();
