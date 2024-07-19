import { createCardList } from "./dombuilder.js";

const playBtn = document.getElementById("playBtn")
playBtn.addEventListener("click", ()=>{
    location.href = "./index.html"
})

createCardList();
