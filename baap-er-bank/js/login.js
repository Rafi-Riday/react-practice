document.getElementById('btn-submit').addEventListener('click', function () {
    const email = document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value;
    if (email === 'sontan@baap.com' && password === 'secret') {
        window.location.href = 'bank.html';
    }
    else {
        alert('পাসওয়ার্ড ভুল, আগে ভাল মানুষ হ    0:-(');
    }
});