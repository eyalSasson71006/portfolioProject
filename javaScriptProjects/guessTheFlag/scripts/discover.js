import { createCardList } from "./dombuilder.js";

const search = document.getElementById("search")
const playBtn = document.getElementById("playBtn")

playBtn.addEventListener("click", ()=>{
    location.href = "./index.html"
})

createCardList();

search.focus()