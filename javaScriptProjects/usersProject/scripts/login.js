let usernameInput = document.getElementById("usernameInput");
let passwordInput = document.getElementById("passwordInput");
let loginButton = document.getElementById("loginButton");
let registerButton = document.getElementById("registerButton");

let users = JSON.parse(localStorage.getItem("users")) || [];

registerButton.addEventListener("click", () => {
    location.href = "./register.html";
});

loginButton.addEventListener("click", () => {
    let currentUser = users.find(user => {
        if (user.username == usernameInput.value && user.password == passwordInput.value) {
            user.lastLogged = new Date();
            console.log(user.lastLogged);
            return user;
        }
    });
    localStorage.setItem("users", JSON.stringify(users));
    if (currentUser) {
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        if (currentUser.isAdmin) {
            location.href = "./adminCrm.html";
        }
        location.href = "./index.html";
    } else {
        alert("Wrong username or password...");
    }
});

// login with a click on the enter key
document.addEventListener("keypress", e => {
    if (e.key === "Enter") {
        e.preventDefault();
        loginButton.click();
    }
});