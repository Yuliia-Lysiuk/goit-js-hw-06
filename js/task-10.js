function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const ref = {
 number: document.querySelector("input"),
 btCreate: document.querySelector("[data-create]"),
 btDestroy: document.querySelector("[data-destroy]"),
 boxes: document.querySelector("#boxes"),
}

function createBox(amount) {
  let boxSize = 30;
  for (let i = 1; i <= amount; i += 1) {
    const box = `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color:${getRandomHexColor()};"></div>`
    ref.boxes.insertAdjacentHTML("beforeend", box);
    boxSize += 10;
  }
}

function destroyBox() {
   ref.boxes.innerHTML = '';
};

ref.btCreate.addEventListener("click", () => {
  createBox( ref.number.value);
});

ref.btDestroy.addEventListener("click", () => {
  destroyBox();
   ref.number.value = "";
});

