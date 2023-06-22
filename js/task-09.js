const btn = document.querySelector(".change-color");
const colorSpanCode = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
  const onChangeColorClick = (event) => {
  const colorCode = getRandomHexColor();

  document.body.style.backgroundColor = colorCode;
  colorSpanCode.textContent = colorCode;
};
btn.addEventListener("click", onChangeColorClick);