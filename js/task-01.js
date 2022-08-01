const categories = document.querySelectorAll("li.item");
const numberOfCategories = categories.length;
console.log("Number of categories:", numberOfCategories);


const elem = document.querySelectorAll("#categories>li")
elem.forEach(el => {
    console.log(`Category: ${el.firstElementChild.textContent}, Elements: ${el.lastElementChild.children.length}`);
})

