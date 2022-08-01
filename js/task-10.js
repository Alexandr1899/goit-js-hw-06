const control = document.querySelector('#controls input');
const createBtn = document.querySelector("button[data-create");
const destroyBtn = document.querySelector("button[data-destroy]");
const parentBox = document.querySelector("#boxes")

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function boxesChanges(event) {
    control.setAttribute("count", Number(event.currentTarget.value));
    console.log(Number(event.currentTarget.value));
}
control.addEventListener('input', boxesChanges);

let baseBoxSize = 30;

function createBoxes(amount) {
    let countBoxes = Number(control.getAttribute("count"));

    for (let i = 0; i < countBoxes; i+=1) {
        baseBoxSize += 10;
        
        const newBox = document.createElement("div");
        newBox.style.background = getRandomHexColor();
        newBox.style.height = baseBoxSize + "px";
        newBox.style.width = baseBoxSize + "px";
        newBox.style.margin = "10px";
        newBox.classList.add("new-box");
        parentBox.append(newBox);
    }
}
createBtn.addEventListener("click", createBoxes);

function destroyBoxes() {
    const allNewBoxes = document.querySelectorAll(".new-box");

    for (let allNewBox of allNewBoxes) {
    parentBox.remove(allNewBox);
    }

    baseBoxSize = 30;
};

destroyBtn.addEventListener("click", destroyBoxes);