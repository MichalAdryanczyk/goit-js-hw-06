const nameIn = document.querySelector("#name-input");
const nameOut = document.querySelector("#name-output");
nameIn.addEventListener("input", (event) => {
  nameOut.textContent = event.currentTarget.value;
  console.log(nameOut.textContent);
  if (nameOut.textContent == "") {
    nameOut.textContent = "Anonymous";
  }
});