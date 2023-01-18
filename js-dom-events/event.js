// onclick option : 1 : direct code
// <button onclick="document.body.style.backgroundColor = 'purple'">Make Purple</button>
// onclick option : 2 : function call
// IMPORTANT
const makeRed = () => document.body.style.backgroundColor = 'red';
// onclick option : 3 : function in variable
const makeYellowButton = document.getElementById('make-yellow');
makeYellowButton.onclick = makeYellow;
function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}
// onclick option : 3 extra : direct function code
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = () => document.body.style.backgroundColor = 'blue';
// onclick option : 4 : addEventListener
const makePinkButton = document.getElementById('make-pink');
makePinkButton.addEventListener('click', makePink);
function makePink() {
    document.body.style.backgroundColor = 'pink';
}
// onclick option : 4.5 : addEventListener direct function
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'green';
})
// onclick option : 4 Final : addEventListener Final -> direct code
// IMPORTANT
document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})
