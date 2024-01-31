document.getElementById('hello-kitty').style.visibility = 'hidden';

function showHint() {
    window.alert("What is the day we last saw each other?");
}

function unHide() {
    document.getElementById('hello-kitty').style.visibility = 'visible';
}
function checkPassword() {
    const possiblePasses = ["January 14", "January 15", "1/14", "1/15"];

    var passwordInput = document.getElementById("password").value;
    
    if (possiblePasses.includes(passwordInput)) {
        document.getElementById("password-container").classList.add("hidden");
        unHide();
    } else {
        alert("Incorrect password. Please try again. (Use the hint)");
    }
}