const inputText = document.querySelector("#validation-input");
const inputLength = parseInt(inputText.getAttribute("data-length"));

inputText.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === inputLength) {
    inputText.classList.remove("invalid");
    inputText.classList.add("valid");
  } else {
    inputText.classList.remove("valid");
    inputText.classList.add("invalid");
  }
});