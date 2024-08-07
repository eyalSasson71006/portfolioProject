let rstBtn = document.getElementById("rstBtn");
let backToMenu = document.getElementById("backToMenu");

let player = "X";
let board = ["", "", "", "", "", "", "", "", "",];
const allCells = document.querySelectorAll(".cell")

let shellX = '<img src="./images/shellX.png" alt="shellX" class="shells">'
let shellO = '<img src="./images/shellO.png" alt="shellO" class="shells">'

let computer = Number(localStorage.getItem("computer")) || "0";

function makeMove(cell, cellIndex) {
    if (board[cellIndex] === "") {
        board[cellIndex] = player; // save the click
        if(player == "X"){
            cell.innerHTML = shellX;
        }else if (player == "O"){
            cell.innerHTML = shellO;
        }
        requestAnimationFrame(() => {
            setTimeout(()=>{
                let result = checkWin();
                if (result == 1) {
                    alert("The winner is : " + player);
                    restartGame();
                    return;
                } else if (result == -1) {
                    alert("Its a draw");
                    restartGame();
                    return;
                }

                player = player === "X" ? "O" : "X"; //toggle turn
                if (computer == 1) {
                    compMove();
                }
            },0)
        });
        // compMove()
    }
}

allCells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        makeMove(cell, index);
    });
});

function compMove(){
    for(let i=0;i<board.length;i++){
        let randNum = Math.floor(Math.random()*9)
        if(board[randNum] == ""){
            board[randNum] = player
            if (player == "X") {
                allCells[randNum].innerHTML = shellX;
            } else if (player == "O") {
                allCells[randNum].innerHTML = shellO;
            }
            requestAnimationFrame(()=>{
                setTimeout(()=>{
                    let result = checkWin();
                    if (result == 1) {
                        alert("The winner is : " + player);
                        restartGame();
                        return;
                    } else if (result == -1) {
                        alert("Its a draw");
                        restartGame();
                        return;
                    }
                    player = "X"
                },0)
            })
            return
        }
    }
}

function restartGame() {
    board = ["", "", "", "", "", "", "", "", "",];
    player = "X";
    document.querySelectorAll(".cell").forEach(cell => {
        cell.innerHTML = "";
    });
}

if(rstBtn){
    rstBtn.addEventListener("click", restartGame);
}


function checkWin() {
    //returns 1 if there is a winner
    if ((board[0] == board[1] && board[1] == board[2] && board[0] != "") ||
        (board[3] == board[4] && board[4] == board[5] && board[3] != "") ||
        (board[6] == board[7] && board[7] == board[8] && board[6] != "") ||
        (board[0] == board[3] && board[3] == board[6] && board[0] != "") ||
        (board[1] == board[4] && board[4] == board[7] && board[1] != "") ||
        (board[2] == board[5] && board[5] == board[8] && board[2] != "") ||
        (board[0] == board[4] && board[4] == board[8] && board[0] != "") ||
        (board[2] == board[4] && board[4] == board[6] && board[2] != "")) {
        return 1
    }
    //returns -1 if its a draw
    if (!board.includes("")) {
        return -1;
    }
}

backToMenu.addEventListener("click", ()=>{
    location.href = "./index.html"
})


