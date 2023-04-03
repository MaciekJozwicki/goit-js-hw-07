const listEl = document.getElementById("categories");

const categoriesQuantity = listEl.children.length;
// console.log(categoriesQuantity);
const listItem = document.querySelectorAll(".item");
const categoriesQuantity2 = listItem.length;
console.log(
    `Number of categories: ${categoriesQuantity2}`)

listItem.forEach((element) => {
    const itemTitle = element.querySelector("h2");
    const itemQuantity = element.querySelectorAll("li")
    console.log(`
Category: ${itemTitle.textContent}
Elements: ${itemQuantity.length}`);

})

