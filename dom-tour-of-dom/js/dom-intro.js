// console.log('This is from embedded');
// function call from DOM
const obj = {
    func: function () {
        console.log('function worked');
    }
}
// getElementsByTagName
const liList = document.getElementsByTagName('li');
// console.log(liList);
for (const li of liList) {
    // console.log(li.innerText);
}
// getElementById
const placeIdList = document.getElementById('place-list');
const deviceIdList = document.getElementById('device-list');
const foodIdList = document.getElementById('food-list');

// console.log(placeIdList);
// console.log(deviceIdList);
// console.log(foodIdList);
// getElementsByClassName
const places = document.getElementsByClassName('place');
const devices = document.getElementsByClassName('device');
const foods = document.getElementsByClassName('food');

// console.log(places);
// for (const place of places) {
//     console.log(place);
//     console.log(place.innerText);
// }
// console.log(devices);
// console.log(foods);

// querySelector
const placeQueryList = document.querySelector('#place-list');
const deviceQueryList = document.querySelector('#device-list');
const foodQueryList = document.querySelector('#food-list');

// console.log(placeQueryList);

// querySelectorAll
const placeQueryAllList = document.querySelectorAll('.place');
const deviceQueryAllList = document.querySelectorAll('.device');
const foodQueryAllList = document.querySelectorAll('.food');

const liPlaceQueryAllList = document.querySelectorAll('li.place');
for (const li of liPlaceQueryAllList) {
    // console.log(li);
}

// console.log(placeQueryAllList);
for (const place of placeQueryAllList) {
    // console.log(place);
}