// searching
const bringMeToLife = 'How can you see into my eyes, like open doors\nLeading you down into my core\nWhere I\'ve become so numb\nWithout a soul\nMy spirit\'s sleeping somewhere cold\nUntil you find it there and lead it back home'

let searchString = 'leading';

// .includes()
console.log(bringMeToLife.toLowerCase().includes(searchString.toLowerCase()));

// .indexOf()
console.log(bringMeToLife.toLowerCase().indexOf(searchString.toLowerCase()));

// .startsWith()
console.log(bringMeToLife.toLowerCase().startsWith('how'.toLowerCase()));
// .endsWith()
console.log(bringMeToLife.toLowerCase().endsWith('home'.toLowerCase()));
console.log('file.pdf'.toLowerCase().endsWith('.pdf'.toLowerCase()));
