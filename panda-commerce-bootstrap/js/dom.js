// challange
// 2
const h2Tags = document.getElementsByTagName('h2');
for (const h2Tag of h2Tags) {
    h2Tag.style.color = '#047091';
}
// 3
document.getElementById('backpack').style.backgroundColor = 'tomato';
// 4
const cardClass = document.getElementsByClassName('card');
for (const card of cardClass) {
    card.style.borderRadius = '30px';
}
// 5
const pandaBtnDangerAll = document.querySelectorAll('.btn.panda-btn-danger');
for (const pandaBtnDanger of pandaBtnDangerAll) {
    pandaBtnDanger.addEventListener('click', function () {
        console.log('Panda Button Danger clicked');
    });
}
// 6
const buyNowAll = document.querySelectorAll('.buy-now');
for (const buyNow of buyNowAll) {
    buyNow.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target);
    });
}
// 7
document.getElementById('email').addEventListener('keyup', function (event) {
    if (event.target.value === 'email') {
        document.getElementById('email-submit').removeAttribute('disabled');
    }
    else {
        document.getElementById('email-submit').setAttribute('disabled', true);
    }
});
// 8
const images = document.querySelectorAll('img');
for (const image of images) {
    image.addEventListener('mouseenter', function (event) {
        image.style.transform = 'scale(1.1)';
        // image.setAttribute('style', 'transform: scale(1.1);');
    });
    image.addEventListener('mouseleave', function (event) {
        image.style.transform = 'scale(1)';
        // image.setAttribute('style', 'transform: scale(1);');
    });
}
// 9
const subscribe = document.getElementById('subscribe');
subscribe.addEventListener('dblclick', function () {
    subscribe.style.backgroundColor = 'tomato';
    subscribe.style.color = '#fff';
});
document.getElementById('subscribe').addEventListener('click', function () {
    subscribe.style.backgroundColor = 'lightpink';
    subscribe.style.color = '#000';
});
// challange finished :)