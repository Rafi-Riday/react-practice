// appending item
const placeUl = document.querySelector('#place-list ul');
// console.log(placeUl);
const li = document.createElement('li');
li.innerText = 'This is added by JS';
placeUl.appendChild(li);
// appending whole section
const mainTag = document.querySelector('main');
const newSection = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'New section added by js';
const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Fist item';
const li2 = document.createElement('li');
li2.innerText = 'Second item';
const li3 = document.createElement('li');
li3.innerText = 'Third item';
const li4 = document.createElement('li');
li4.innerText = 'Fourth item';
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
newSection.appendChild(h1);
newSection.appendChild(ul);
mainTag.appendChild(newSection);
// appending whole section by innerHTML
const anotherSection = document.createElement('section');
anotherSection.innerHTML = `
<h1>Another section by innerHTML</h1>
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
`
mainTag.appendChild(anotherSection);