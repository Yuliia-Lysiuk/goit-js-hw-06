const inputControlSize = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputControlSize.addEventListener("input", (event) => {
    textEl.style.fontSize = event.currentTarget.value + "px";
})
