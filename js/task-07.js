const fontEl = document.querySelector('#font-size-control');
const fontText = document.querySelector("#text");


function handleInputRange(event) {
    fontText.style.fontSize = event.currentTarget.value + "px";
}

fontEl.addEventListener("input", handleInputRange);