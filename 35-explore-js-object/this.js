function click1(thisParameter) {
    console.log(this);
    console.log(thisParameter);
    const change = thisParameter.parentElement.getElementsByClassName('change')[0];
    change.classList.contains('d-none') ? change.classList.remove('d-none') : change.classList.add('d-none');
}

document.getElementById('click2').addEventListener('click', function (event) {
    console.log(this);
})

const newObj = {
    this1: function () {
        console.log(this);
    },
    this2: (thisParameter) => {
        console.log(this);
        console.log(thisParameter);
    },
    inside1: {
        inside2: {
            inside3: {
                this3: (thisParameter) => {
                    console.log(this);
                    console.log(thisParameter);
                }
            }
        }
    },
}
