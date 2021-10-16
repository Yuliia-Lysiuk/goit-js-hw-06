function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const ref = {
 number: document.querySelector("input"),
 btCreate: document.querySelector("[data-create]"),
 btDestroy: document.querySelector("[data-destroy]"),
 boxes: document.querySelector("#boxes"),
}

let clicks = 0;

function trigger() {
   function rr () {
    console.log(++clicks);
  }
  if (clicks > 1) {
      console.log(ghghgh);
  }
  return rr 
}
const counter = trigger();

ref.btCreate.addEventListener('click', counter);

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
console.log();
ref.btDestroy.addEventListener("click", () => {
  destroyBox();
   ref.number.value = "";
});
