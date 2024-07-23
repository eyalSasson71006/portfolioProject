greeting = document.getElementById("greeting");
logoutButton = document.getElementById("logoutButton");

currentUser = JSON.parse(localStorage.getItem("currentUser"));

logoutButton.addEventListener("click", () => {
    localStorage.setItem("currentUser", JSON.stringify([]));
    location.href = "./login.html";
});

if (!currentUser || currentUser == "") {
    location.href = "./login.html";
    alert("Please log in");
} else if (currentUser.isAdmin) {
    location.href = "./adminCrm.html";
} else if (currentUser) {
    greeting.innerText = "Welcome " + currentUser.name;
}