const inputEl = document.querySelector("#validation-input");
const dataLength = inputEl.getAttribute("data-length");

inputEl.addEventListener("blur", (e) => {
    inputEl.value.length === +dataLength
        ? (inputEl.className = "valid")
        : (inputEl.className = "invalid")
})





console.log(typeof +dataLength)