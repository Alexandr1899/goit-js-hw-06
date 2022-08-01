const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listTwo = document.querySelector("#ingredients");


const ingredientList = ingredients.map(ingredient => {
  const elem = document.createElement('li');
  
  elem.textContent = ingredient;
  elem.classList.add("item");
  return elem
});
console.log(ingredientList);
listTwo.append(...ingredientList)