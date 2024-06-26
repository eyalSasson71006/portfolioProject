const flag = document.getElementById("flag")
const submit = document.getElementById("submit")
const skip = document.getElementById("skip")
const guess = document.getElementById("guess")
const result = document.getElementById("result")
const scoreLabel = document.getElementById("scoreLabel")

let currentFlag = null
let score = 0

function getFlag() {
    let randNum = Math.floor(Math.random() * 250)
    const request = new XMLHttpRequest();
    request.onload = () => {
        let result = request.response;
        result = JSON.parse(result);
        let data = result[randNum]
        flag.src = data.flags.png;
        console.log(data.name.common)
        currentFlag = data.name.common
    };
    request.open("GET", 'https://restcountries.com/v3.1/all?fields=name,flags');
    request.send();
    result.style.display = "none"
    result.classList.remove("*")
}

getFlag()

submit.addEventListener("click", ()=>{
    if (guess.value.toLowerCase() == currentFlag.toLowerCase()){
        score++
        result.style.display = "block"
        result.classList.remove("wrong")
        result.classList.add("correct")
        result.innerText = "correct!"
        scoreLabel.innerText = "Score: " + score
        guess.value = ""
        setTimeout(() => {
            getFlag()
        }, 1000);
    }else{
        result.style.display = "block"
        result.classList.add("wrong")
        result.innerText = "Wrong, try again"
        guess.value = ""
    }
})

skip.addEventListener("click", ()=>{
    result.classList.remove("wrong");
    guess.value = "";
    getFlag();
})