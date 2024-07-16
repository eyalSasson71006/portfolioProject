const registerButton = document.getElementById("registerButton");
const nameInput = document.getElementById("nameInput");
const userNameInput = document.getElementById("userNameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const admin = document.getElementById("admin");

let users = JSON.parse(localStorage.getItem("users")) || [];

function containsLetter(input) {
    for (const note of input) {
        if ((note >= "a" && note <= "z") ||
            (note >= "A" && note <= "Z")) {
            return true;
        }
    }
    return false;
}

function containsSigns(input) {
    const signs = "!@#$%^&*()_+=-[]{};':\"\\|,.<>/?";
    for (const note of input) {
        if (signs.includes(note)) {
            return true;
        }
    }
    return false;
}


function validateFields(name, email, username, password) {
    if (name.length < 2) {
        alert("The Name must be minimum 2 characters");
        return false;
    }
    if (checkEmailExistence(email)) {
        alert("The Email already exist");
        return false;
    }
    if (username.length < 2) {
        alert("The Username must be minimum 2 characters");
        return false;
    }
    if (!containsSigns(password) ||
        !containsLetter(password) ||
        password.length < 8 ||
        password.length > 20) {
        alert("The Password must be minimum 8 to 20 characters and must have at least one symbol and one letter");
        return false;
    }
    return true;
}
//save
function registerUser(name, email, username, password) {
    let user = {
        "name": name,
        "email": email,
        "username": username,
        "password": password,
        "isAdmin": admin.checked,
        "lastLogged": new Date()
    };
    users.push(user);
    localStorage.setItem("currentUser", JSON.stringify(user));
    localStorage.setItem("users", JSON.stringify(users));
    //navigation
    location.href = "./index.html";
}


registerButton.addEventListener("click", () => {
    if (validateFields(nameInput.value, emailInput.value, userNameInput.value, passwordInput.value)) {
        registerUser(nameInput.value, emailInput.value, userNameInput.value, passwordInput.value);
    }
});

function checkEmailExistence(input) {
    for (const user of users) {
        if (input == user.email) {
            return true;
        }
    }
    return false;
}
