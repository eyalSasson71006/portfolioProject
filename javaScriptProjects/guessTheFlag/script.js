const flag = document.getElementById("flag")
const submit = document.getElementById("submit")
const skip = document.getElementById("skip")
const guess = document.getElementById("guess")
const result = document.getElementById("result")
const scoreLabel = document.getElementById("scoreLabel")

let currentFlag = null
let score = 0
let usedCountries = []

async function getFlag() {
    let randNum = Math.floor(Math.random() * 250);
    let data = await (await fetch('https://restcountries.com/v3.1/all?fields=name,flags')).json()
    data = data[randNum];
    if (usedCountries.includes(data)) {
        getFlag();
    }
    flag.src = data.flags.png;
    console.log(data.name.common);
    currentFlag = data.name.common;
    usedCountries.push(data)

    result.style.display = "none";
    result.classList.remove("*");
    return data
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
    guess.focus();
})

skip.addEventListener("click", ()=>{
    result.classList.remove("wrong");
    guess.value = "";
    getFlag();
})