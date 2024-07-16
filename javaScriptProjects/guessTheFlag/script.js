const flag = document.getElementById("flag")
const submit = document.getElementById("submit")
const skip = document.getElementById("skip")
const guess = document.getElementById("guess")
const result = document.getElementById("result")
const scoreLabel = document.getElementById("scoreLabel")

let currentFlag = null
let score = 0
let usedCountries = JSON.parse(localStorage.getItem("usedCountries")) || []

async function getFlag() {
    let randNum = Math.floor(Math.random() * 250);
    let data = await (await fetch('https://restcountries.com/v3.1/all?fields=name,flags')).json()
    data = data[randNum];
    if (usedCountries.length >= 250) {
        alert("Congratulations you Know all the world's flags!");
        usedCountries = [];
    }
    if (usedCountries.find(country => country.name.common == data.name.common)) {
        getFlag();
    }
    if(data.flags){
        flag.src = data.flags.png;
    }else{
        flag.src = "./images/loading.gif";
    }
    console.log(data.name.common);
    currentFlag = data.name.common;

    result.style.opacity = "0"
    result.classList.remove("*");
    return data
}

let data = getFlag();

submit.addEventListener("click",async ()=>{
    let flag = await data
    if (guess.value.toLowerCase() == currentFlag.toLowerCase()){
        score++
        result.style.opacity = "1"
        result.classList.remove("wrong")
        result.classList.add("correct")
        result.innerText = "correct!"
        scoreLabel.innerText = "Score: " + score
        guess.value = ""
        usedCountries.push(flag)
        localStorage.setItem("usedCountries", JSON.stringify(usedCountries))
        setTimeout(() => {
            data = getFlag()
        }, 1000);
    }else{
        result.style.opacity = "1"
        result.classList.add("wrong")
        result.innerText = "Wrong, try again"
        guess.value = ""
    }
    guess.focus();
})

skip.addEventListener("click", async ()=>{
    let flag = await data
    guess.value = "";
    result.style.opacity = "1"
    result.classList.add("wrong")
    result.innerText = "The Answer was: " + flag.name.common;
    setTimeout(() => {
        data = getFlag();
    }, 1300);
})