function userData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUserData(data))
}
function displayUserData(user) {
    const userUl = document.getElementById('user-data-ul');
    user.forEach(x => {
        const li = document.createElement('li');
        li.innerText = x.name;
        userUl.appendChild(li);
    });
}