class Todo {
    description;
    creationDate;
    isComplete;
    constructor( description) {
        this.description = description;
        let date = new Date();
        this.creationDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        this.isComplete = false;
    }
}

class TodoManager {
    tasks;
    constructor() {
        this.tasks = tasks;
    }

    addTask(description) {
        let newTask = new Todo(description);
        this.tasks.push(newTask);
        addTasksToScreen(this.tasks);
    }

    removeTask(index) {
        this.tasks.splice(index, 1);
        addTasksToScreen(this.tasks);
    }

    updateTask(index, newDescription) {
        this.tasks[index].description = newDescription;
        addTasksToScreen(this.tasks);
    }

    toggleIsComplete(index) {
        this.tasks[index].isComplete = !this.tasks[index].isComplete;
        addTasksToScreen(this.tasks);
    }
}

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

document.addEventListener('DOMContentLoaded', ()=>{
    addTasksToScreen(tasks);
});

let todoListBody = document.getElementById("todoListBody");
let addTaskBtn = document.getElementById("addTaskBtn");

let taskManager = new TodoManager();

function addTaskToScreen(task, index) {
    //create the element
    let row = `
        <tr id="row${index}">
            <td>
            <input type="checkbox" ${task.isComplete ? "checked" : ""} onchange="taskManager.toggleIsComplete(${index})"/>
            </td>
            <td>${task.description}</td>
            <td>
            <button onclick="makeRowEditable(${task.isComplete},'${task.description}','${task.creationDate}',${index})"><img src="./images/edit_icon.png" alt="edit"></button>
            </td>
            <td>
            <button onclick="taskManager.removeTask(${index})"><img src="./images/delete_icon.png" alt="delete"></button>
            </td>
            <td>${task.creationDate}</td> 
        </tr>
`;
    //append child
    todoListBody.innerHTML += row;
}

function addTasksToScreen(tasks) {
    todoListBody.innerHTML = "";
    tasks.forEach((task, index) => {
        addTaskToScreen(task, index);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

function makeRowEditable(isComplete, description, creationDate, index) {
    let rowOnHtml = document.getElementById("row" + index);
    let newRow = `
            <td>
            <input type="checkbox" ${isComplete ? "checked" : ""} onchange="toggleIsComplete(${index})"/>
            </td>
            <td>
            <input type="text" id="editInput${index}" value="${description}"/>
            </td>
            <td>
            <button onclick="editTask(${index})"><img src="./images/save_icon.png" alt="save"></button>
            </td>
            <td>
            <button onclick="taskManager.removeTask(${index})"><img src="./images/delete_icon.png" alt="delete"></button>
            </td>
            <td>${creationDate}</td>
`;
    rowOnHtml.innerHTML = newRow;
    document.getElementById(`editInput${index}`).focus()
}

function editTask(index) {
    let editInput = document.getElementById("editInput" + index);
    if (editInput.value) {
        taskManager.updateTask(index, editInput.value);
    }
}

addTaskBtn.addEventListener("click", () => {
    let txtInput = document.getElementById("newTaskInput");
    if (txtInput.value) {
        taskManager.addTask(txtInput.value);
        txtInput.value = "";
    }
    txtInput.focus();
});

// add Task with a click on the enter key
document.addEventListener("keypress", e => {
    if (e.key === "Enter") {
        e.preventDefault();
        addTaskBtn.click();
    }
});
