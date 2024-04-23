const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "inter" || "matteson" || "dillon" && password === "stellar" || "01132011" || "dillon") {
        alert("You have successfully logged in.");
        window.location.replace("/interpass-home.html")
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
