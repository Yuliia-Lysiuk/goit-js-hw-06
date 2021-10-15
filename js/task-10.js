function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const number = document.querySelector("input");

const btCreate = document.querySelector("[data-create]");

const btDestroy = document.querySelector("[data-destroy]");

btCreate.addEventListener("click", createBox)