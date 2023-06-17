const textInput = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

function changeFont(){
    textSpan.style.fontSize = `${textInput.value}px`;
}
textInput.addEventListener("input", changeFont);