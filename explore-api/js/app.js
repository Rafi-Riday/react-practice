function loadSampleData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayData(data))
}
function displayData(data) {
    console.log(data);
}