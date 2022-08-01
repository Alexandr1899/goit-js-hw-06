const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

const counterValue = {
    value: 0,

    decrementFunction() {
        this.value -= 1;
    },
        
    incrementFunction() {
        this.value += 1;
    },
}

const increase = function() {
    counterValue.incrementFunction();
    valueEl.textContent = counterValue.value;
}
const decrease = function () {
    counterValue.decrementFunction();
    valueEl.textContent = counterValue.value;
}

decrement.addEventListener('click', decrease);
increment.addEventListener('click', increase);

