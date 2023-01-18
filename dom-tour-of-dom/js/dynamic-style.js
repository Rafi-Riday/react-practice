// dynamic style
const placeList = document.getElementById('place-list');
const deviceList = document.getElementById('device-list');
const foodList = document.getElementById('food-list');
const sectionTag = document.getElementsByTagName('section');

for (const section of sectionTag) {
    section.style.background = '#333';
    section.style.color = '#fff';
    section.style.marginBottom = '1rem';
    section.style.padding = '3rem';
    section.style.borderRadius = '15px';
    section.style.textAlign = 'left';
}
