dataTable = document.getElementById("dataTable");
currentUser = JSON.parse(localStorage.getItem("currentUser"));
logoutButton = document.getElementById("logoutButton");

let dataForTable = "";
let users = JSON.parse(localStorage.getItem("users")) || [];

logoutButton.addEventListener("click", () => {
    localStorage.setItem("currentUser", JSON.stringify([]));
    location.href = "./login.html";
});

if (!currentUser || !currentUser.isAdmin) {
    alert("Your'e not an Admin!!");
    location.href = "./login.html";
}

users.forEach((user, index) => {
    dataForTable += `
        <tr>
          <td>${user.name}</td>
          <td>${user.username}</td>
          <td>${user.email}</td>
          <td>${user.lastLogged}</td>
          <td>${user.isAdmin}</td>
          <td>
            <button onClick="deleteUser(${index})" class="btn delete">DELETE</button>
            <button onClick="${adminFunctions(index)}(${index})" class="btn admin">${adminBtn(index)}</button>
          </td>
        </tr>
        `;
    dataTable.innerHTML = dataForTable;
});

function deleteUser(index) {
    if (confirm("Are you sure you want to delete this user?")) {
        users.splice(index, 1);
        localStorage.setItem("users", JSON.stringify(users));
        location.reload();
    }
}

function makeAdmin(index) {
    if (confirm("Are you sure you want to make this user Admin?")) {
        users[index].isAdmin = true;
        localStorage.setItem("users", JSON.stringify(users));
        location.reload();
    }
}
function removeAdmin(index) {
    if (confirm("Are you sure you want to remove this user Admin?")) {
        users[index].isAdmin = false;
        localStorage.setItem("users", JSON.stringify(users));
        location.reload();
    }
}

function adminFunctions(index) {
    if (users[index].isAdmin) {
        return "removeAdmin";
    } else {
        return "makeAdmin";
    }
}

function adminBtn(index) {
    if (users[index].isAdmin) {
        return "Remove Admin";
    } else {
        return "Make Admin";
    }
}