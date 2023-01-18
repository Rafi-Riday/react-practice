// prevent string to be typed
document.getElementById('deposite-field').addEventListener('keyup', function (event) {
    keyUpPreventNaN(event);
});
document.getElementById('withdraw-field').addEventListener('keyup', function (event) {
    keyUpPreventNaN(event);
});
// deposite
document.getElementById('btn-deposite').addEventListener('click', function () {
    calculation('deposite-value', 'deposite-field', 'balance-value', '1');
});
// withdraw
document.getElementById('btn-withdraw').addEventListener('click', function () {
    calculation('withdraw-value', 'withdraw-field', 'balance-value', '-1');
});
