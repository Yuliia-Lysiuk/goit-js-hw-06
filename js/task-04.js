const btDecrement = document.querySelector(`button[data-action="decrement"]`);

const counterValues = document.querySelector("#value");

const btIncrement = document.querySelector(`button[data-action="increment"]`);

let counterValue = 0;

btDecrement.addEventListener("click", () => {
    counterValue -= 1;
    counterValues.textContent = counterValue;
    return counterValue;
})

btIncrement.addEventListener("click", () => {
    counterValue += 1;
    counterValues.textContent = counterValue;
    return counterValue;
})
