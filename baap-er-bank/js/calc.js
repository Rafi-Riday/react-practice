// deposite
document.getElementById('btn-deposite').addEventListener('click', function () {
    // variable
    const depositeValue = document.getElementById('deposite-value');
    const depositeField = document.getElementById('deposite-field');
    const balanceValue = document.getElementById('balance-value');
    // process
    const depositeFieldValue = depositeField.value;
    depositeField.value = '';
    if (isNaN(parseFloat(depositeFieldValue))) {
        alert(depositeFieldValue + ' is not a Number    :-(');
        return;
    }
    depositeValue.innerText = parseFloat(depositeValue.innerText) + parseFloat(depositeFieldValue);
    balanceValue.innerText = parseFloat(balanceValue.innerText) + parseFloat(depositeFieldValue);
});
// withdraw
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // variable
    const withdrawValue = document.getElementById('withdraw-value');
    const withdrawField = document.getElementById('withdraw-field');
    const balanceValue = document.getElementById('balance-value');
    // process
    const withdrawFieldValue = withdrawField.value;
    withdrawField.value = '';
    if (isNaN(parseFloat(withdrawFieldValue))) {
        alert(withdrawFieldValue + ' is not a Number    :-(');
        return;
    }
    if (parseFloat(balanceValue.innerText) < parseFloat(withdrawFieldValue)) {
        alert('বাপের হোটেলে এত টাকা নাই    :-(');
        return;
    }
    withdrawValue.innerText = parseFloat(withdrawValue.innerText) + parseFloat(withdrawFieldValue);
    balanceValue.innerText = parseFloat(balanceValue.innerText) - parseFloat(withdrawFieldValue);
});
