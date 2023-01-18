// function to calculate shortly
function calculation(value, field, total, numValue) {
    // variable
    const targetValue = document.getElementById(value);
    const targetField = document.getElementById(field);
    const balanceValue = document.getElementById(total);
    // process
    const targetFieldValue = targetField.value;
    targetField.value = '';
    const newValue = parseFloat(targetValue.innerText) + parseFloat(targetFieldValue);
    const newTotal = parseFloat(balanceValue.innerText) + (parseInt(numValue) * parseFloat(targetFieldValue));
    if (isNaN(newTotal)) {
        alert('\"' + targetFieldValue + '\"' + ' is not a Number    :-(');
        return;
    }
    if (newTotal < 0) {
        alert('বাপের হোটেলে এতো টাকা নাই    :-(');
        return;
    }
    targetValue.innerText = newValue;
    balanceValue.innerText = newTotal;
}
// prevent string to be typed
function keyUpPreventNaN(eventArg) {
    if (isNaN(eventArg.target.value)) {
        alert('\"' + eventArg.target.value + '\"' + ' is not a Number    :-(');
        eventArg.target.value = eventArg.target.value.slice(0, -1);
        return;
    }
}