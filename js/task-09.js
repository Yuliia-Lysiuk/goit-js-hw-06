function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btColor = document.querySelector(".change-color");

const body = document.querySelector("body");

const textColor = document.querySelector(".color");

btColor.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  textColor.textContent = getRandomHexColor();
})