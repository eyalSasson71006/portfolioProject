// Get elements from the DOM
const flag = document.getElementById("flag")
const submit = document.getElementById("submit")
const skip = document.getElementById("skip")
const guess = document.getElementById("guess")
const result = document.getElementById("result")
const scoreLabel = document.getElementById("scoreLabel")
const discoverBtn = document.getElementById("discoverBtn")

// initialize variables to keep track of score and the current flag
let currentFlag = null
let score = Number(localStorage.getItem("score")) || 0
scoreLabel.innerText = "Score: " + score

// get previous data from local storage
let usedCountries = JSON.parse(localStorage.getItem("usedCountries")) || []

// get a random flag from api
async function getFlag() {
    let randNum = Math.floor(Math.random() * 250);
    let data = await (await fetch('https://restcountries.com/v3.1/all?fields=name,flags')).json()
    data = data[randNum];
    // check if user passed all the flag, if so restart the game
    if (usedCountries.length >= 250) {
        alert("Congratulations you Know all the world's flags!");
        usedCountries = [];
    }
    // if chosen country was already guessed correctly get a run the function again
    if (usedCountries.find(country => country.name.common == data.name.common)) {
        getFlag();
    }
    
    if(data.flags){
        flag.src = data.flags.png; // draw flag img from data
    }else{
        flag.src = "./images/loading.gif"; // if cant get data show a loading animation
    }
    console.log(data.name.common); // logs answer for checking purposes
    currentFlag = data.name.common;

    result.style.opacity = "0"
    result.classList.remove("*");
    return data
}

// initialize game and store data in a variable
let data = getFlag();

submit.addEventListener("click",async ()=>{
    let flag = await data
    // check if user guessed correctly 
    if (guess.value.toLowerCase().trim() == currentFlag.toLowerCase()){
        score++
        localStorage.setItem("score", JSON.stringify(score))
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

// skip flag and let the user know the answer
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

// check answer with a click on the enter key
guess.addEventListener("keypress", e => {
    if (e.key === "Enter") {
        e.preventDefault();
        document.getElementById("submit").click();
    }
});

discoverBtn.addEventListener("click", ()=>{
    location.href = "./discover.html"
})

