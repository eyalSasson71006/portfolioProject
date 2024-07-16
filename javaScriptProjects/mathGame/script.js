const difficulty = document.getElementById('difficulty');
const question = document.getElementById('question');
const answerInput = document.getElementById('answerInput');
const checkBtn = document.getElementById('checkBtn');
const result = document.getElementById('result');
const scoreValue = document.getElementById('scoreValue');

let num1;
let num2;
let operator;
let answer;
let score = 0
const operators = ['+', '-', '*'];

// return a random number between two values
function getNums(min, max) {
    let num = Math.floor(Math.random()*(max - min + 1) + min);
    return num
}

function generateQuestions(difficulty) {
    reset()
    if (difficulty == "easy") {
        num1 = getNums(1,10);
        num2 = getNums(1,10);
        operator = operators[getNums(0,1)];
    } else if(difficulty == "medium") {
        num1 = getNums(20, 50);
        num2 = getNums(20, 50);
        operator = operators[getNums(0, 1)];
    } else if (difficulty == "hard") {
        num1 = getNums(30, 100);
        num2 = getNums(3, 20);
        operator = operators[getNums(0, 2)];
    }
    question.innerText = `${num1} ${operator} ${num2}`;
    answerInput.focus()
}

function checkAnswer() {
    switch (operator) {
        case "+":
            if (num1 + num2 == answerInput.value) {
                return true
            }else{
                answer = num1 + num2
            }
            break;
        case "-":
            if (num1 - num2 == answerInput.value) {
                return true
            } else {
                answer = num1 - num2;
            }
            break;
        case "*":
            if (num1 * num2 == answerInput.value) {
                return true
            } else {
                answer = num1 * num2;
            }
            break;
        default:
            return false
    }
}

function reset() {
    answer = 0
    result.style.opacity = "0"
    result.innerText = ""
    answerInput.value = ""
}

difficulty.addEventListener('change', () => {
    generateQuestions(difficulty.value);
})


checkBtn.addEventListener("click", ()=>{
    if(checkAnswer()){
        result.style.opacity = "1"
        result.style.color = "green"
        result.innerText = "Correct, Great Job!"
        score++
        scoreValue.innerText = score
    }else{
        result.style.opacity = "1"
        result.style.color = "red"
        result.innerText = `Oops!, The Answer Is ${answer}!`
    }

    setTimeout(() => {
        generateQuestions(difficulty.value);
    }, 1500);
})

answerInput.addEventListener("keypress", e => {
    if (e.key === "Enter") {
        e.preventDefault();
        document.getElementById("checkBtn").click();
    }
})

generateQuestions(difficulty.value);