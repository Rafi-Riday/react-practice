const generateDisplay = document.getElementById('generate-display');
function getPin(n) {
    const pin = Math.round(Math.random() * Math.pow(10, parseInt(n)));
    const pinString = pin + '';
    if (pinString.length === parseInt(n)) {
        return pin;
    }
    else {
        return getPin(n);
    }
}
document.getElementById('generate-btn').addEventListener('click', function () {
    // better idea
    // generateDisplay.value = Math.random().toFixed(4).slice(2, 6);
    // bad idea
    generateDisplay.value = getPin(4);
})
const calcBtnDisplay = document.getElementById('calc-btn-display');
document.getElementById('calc-btn-all').addEventListener('click', function (event) {
    if (!isNaN(event.target.innerText)) {
        calcBtnDisplay.value = calcBtnDisplay.value + event.target.innerText;
    }
    else if (event.target.innerText === '<') {
        // better idea
        // calcBtnDisplay.value = calcBtnDisplay.value.slice(0, -1);
        // bad idea
        const newCalcBtnDisplay = calcBtnDisplay.value.split('');
        newCalcBtnDisplay.pop();
        calcBtnDisplay.value = newCalcBtnDisplay.join('');
    }
    else if (event.target.innerText === 'C') {
        calcBtnDisplay.value = '';
    }
})
document.getElementById('calc-btn-submit').addEventListener('click', function () {
    if (parseInt(calcBtnDisplay.value) === parseInt(generateDisplay.value)) {
        document.getElementById('calc-right').style.display = 'block';
        document.getElementById('calc-wrong').style.display = 'none';
    }
    else {
        document.getElementById('calc-right').style.display = 'none';
        document.getElementById('calc-wrong').style.display = 'block';
    }
})
