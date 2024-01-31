const elements = document.querySelectorAll("*")

elements.forEach(element => {
    if (element.classList.contains("container")) {
        element.classList.add("hidden")
    }
})

function showHint() {
    window.alert("What is the day we last saw each other?");
}

function unHide() {
    elements.forEach(element => {
        if (element.classList.contains("container")) {
            element.classList.remove("hidden");
        }
    })
}
function checkPassword() {
    const possiblePasses = ["January 14", "January 15", "1/14", "1/15"];

    var passwordInput = doocument.getElementById("password").value;
    
    if (possiblePasses.includes(passwordInput)) {
        document.getElementById("password-container").classList.add("hidden");
        unHide();
    } else {
        alert("Incorrect password. Please try again. (Use the hint)");
    }
}