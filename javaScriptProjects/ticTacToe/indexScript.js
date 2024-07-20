const oneP = document.getElementById("oneP");
const twoP = document.getElementById("twoP");


oneP.addEventListener("click", () => {
    localStorage.setItem("computer", "1");
    document.location = "./game.html";
});



twoP.addEventListener("click", () => {
    localStorage.setItem("computer", "0");
    document.location = "./game.html";
});
