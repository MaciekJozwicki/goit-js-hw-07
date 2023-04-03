function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divEl = document.querySelector("#controls")
const inputEl = divEl.firstElementChild
const createEl = inputEl.nextElementSibling 
const destroyEl = createEl.nextElementSibling 
const boxesEl = document.querySelector("#boxes")

function createBoxes(amount) {
  let elem = document.createElement("div")
  elem.style.width("30px");
  elem.style.height("30px");
  elem.style.backgroundColor = getRandomHexColor();
  console.log(elem)
}
createBoxes()

inputEl.addEventListener("input", (e) => {
  console.log(typeof +e.currentTarget.value)
})
console.log(inputEl)

createEl.addEventListener("click", createBoxes)