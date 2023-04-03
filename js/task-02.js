const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listHTML = document.getElementById("ingredients")
// console.log(listHTML)

ingredients.forEach(ingredient => {
  const listEl = document.createElement("li")
  listEl.textContent = ingredient;
  listEl.classList.add("item")
  listHTML.append(listEl)
  // console.log(listEl)
})

