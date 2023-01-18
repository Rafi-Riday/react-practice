// print words in a string reversed
const reverseWord = (str) => {
    const wordList = str.split(' ');
    for (i = wordList.length - 1; i >= 0; i--) {
        console.log(wordList[i]);
    }
}
let string = 'I am Rafiul Hossain Riday';
reverseWord(string);