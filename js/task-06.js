

let inputField = document.querySelector('#validation-input');

let inputLength = inputField.dataset.length;

function addClass(val, inval) {
    inputField.classList.add(val);
    inputField.classList.remove(inval);
}

inputField.addEventListener('change', e => {
    const currentValue = e.target.value;

    if (currentValue.length === +inputLength) {
    addClass('valid', "invalid")
    }
    else {
    addClass('invalid', 'valid')
    }
});