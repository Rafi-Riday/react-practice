// element
const newP = document.getElementById('new-p');
// innerText
newP.innerText = 'abcdefgh';
// getAttribute()
// console.log(newP.getAttribute('id'));
// classList
// console.log(newP.classList);
// console.log(newP.classList.value);
newP.classList.remove('bg-blue');
newP.classList.remove('bold');
newP.classList.remove('font-lg');
newP.classList.remove('text-bold');
newP.classList.add('asd');
// console.log(newP.classList);
// setAttribute()
newP.setAttribute('title', 'tooltip set by javascript');
const title = newP.getAttribute('title');
// console.log(title);
