const counter = document.querySelector("#counter");
const decButton = counter.firstElementChild;
const incrButton = counter.lastElementChild;



const value = document.querySelector("#value")
let counterValue = 0;

const add = () => {
    counterValue += 1
    value.textContent = counterValue
}

const minus = () => {
    counterValue -= 1
    value.textContent = counterValue
}


decButton.addEventListener("click", minus)

incrButton.addEventListener("click", add)
    
