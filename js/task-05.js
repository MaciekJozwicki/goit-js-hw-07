const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", (e) => {
    span.textContent = e.currentTarget.value;
})

console.log(input, span)