const list = document.getElementById("list");
const btn = document.getElementById("btn");
const userEntry = document.getElementById("userEntry");

if (!localStorage.getItem("missions")){
    localStorage.setItem("missions", "[]")
}

let missionsArr = localStorage.getItem("missions")
missionsArr = JSON.parse(missionsArr)

missionsArr.forEach(mission =>{
    if (mission.isDone == false){
        let newItem = document.createElement("li");
        newItem.innerText = mission.taskName;
        list.appendChild(newItem);
    }
    updateList()
})

btn.addEventListener("click", ()=>{
    let mission = {
        taskName: userEntry.value,
        isDone: false,
    }
    missionsArr.push(mission)
    let newItem = document.createElement("li")
    newItem.innerText = mission.taskName
    list.appendChild(newItem)
    userEntry.value = ""
    userEntry.focus()
    updateList()
})

function updateList(){
    list.querySelectorAll("li").forEach(mission => {
        mission.addEventListener("click", deleteLine);
    });
    localStorage.setItem("missions", JSON.stringify(missionsArr))
}
    
function deleteLine(event){
    let element = event.currentTarget;
    element.remove()
    for (const mission of missionsArr) {
        if(mission.taskName == element.innerText){
            mission.isDone = true
        }
    }
    updateList()
}




































// btn.addEventListener("click", () => {
//     let input = userEntry.value;
//     let inputNew = input.replaceAll(' ', '_');
//     list.innerHTML += `<li onClick="deleteLine(${inputNew})" id="${inputNew}">${input}</li>`;
//     userEntry.value = "";
//     userEntry.focus();
// });

// function deleteLine(input) {
//     let inputNew = input.innerHTML.replaceAll(' ', '_');
//     let line = document.getElementById(`${inputNew}`);
//     // line.style.animation = "fade 0.5s ease both"
//     line.style.display = "none";
// }