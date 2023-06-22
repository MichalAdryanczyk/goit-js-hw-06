const logForm = document.querySelector(".login-form");
const handleSubmit = (event) => {
    event.preventDefault();
    const {
    elements: {email, password},
    } = event.currentTarget;

    if (email.value ==="" || password.value ===""){
        return alert("Please fill in all the fields!!!")
    } 
    const logData = {};
    logData[email.name] = email.value;
    logData[password.name] = password.value;
    console.log(logData)
    event.currentTarget.reset()
    }
    logForm.addEventListener("submit", handleSubmit);