const dec = document.querySelector('button[data-action="decrement"]');
const add = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector("#value");

let i = 0;
const clickDec = () => {
  counterValue.textContent = --i;
};

const clickInc = () => {
  counterValue.textContent = ++i;
};

dec.addEventListener("click", clickDec);
add.addEventListener("click", clickInc);
