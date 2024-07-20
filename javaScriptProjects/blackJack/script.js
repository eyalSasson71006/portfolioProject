// Initialize player and dealer decks
let playerDeck = [];
let dealerDeck = [];

// Initialize player and dealer totals
let pTotal;
let dTotal;

// Get elements from the DOM
let popUp = document.getElementById("popUp");
let winner = document.getElementById("winner");
let dealerCard = document.getElementById("dealerCard");
let playerCard = document.getElementById("playerCard");
let playerTotal = document.getElementById("playerTotal");
let dealerTotal = document.getElementById("dealerTotal");
let chip1 = document.getElementById("chip1");
let chip5 = document.getElementById("chip5");
let chip10 = document.getElementById("chip10");
let chip25 = document.getElementById("chip25");
let chip100 = document.getElementById("chip100");
let totalMoney = document.getElementById("totalMoney");
let totalBet = document.getElementById("totalBet");
let placeBtn = document.getElementById("placeBtn");
let hitBtn = document.getElementById("hitBtn");
let standBtn = document.getElementById("standBtn");
let rstBtn = document.getElementById("rstBtn");

// Initialize player and dealer money
let moneySum = JSON.parse(localStorage.getItem("moneySum")) || 100;
let bet = 0;
totalMoney.innerHTML = "Money: " + moneySum;

// Initialize card images
const cards = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
const cardImgs = [
    '<img src="./images/cardA.png" class="card" alt="card">',
    '<img src="./images/card2.png" class="card" alt="card">',
    '<img src="./images/card3.png" class="card" alt="card">',
    '<img src="./images/card4.png" class="card" alt="card">',
    '<img src="./images/card5.png" class="card" alt="card">',
    '<img src="./images/card6.png" class="card" alt="card">',
    '<img src="./images/card7.png" class="card" alt="card">',
    '<img src="./images/card8.png" class="card" alt="card">',
    '<img src="./images/card9.png" class="card" alt="card">',
    '<img src="./images/card10.png"class="card"  alt="card">',
    '<img src="./images/cardJ.png" class="card" alt="card">',
    '<img src="./images/cardQ.png" class="card" alt="card">',
    '<img src="./images/cardK.png" class="card" alt="card">',
];

// Get random card
function getRandomCard() {
    let num = Math.floor(Math.random() * 13);
    return num;
}

//initialize hidden cards to dealer and user
function initializeDeck() {
    playerCard.innerHTML = '<img src="./images/cardsBack.jpg" class="card" alt="card"> <img src="./images/cardsBack.jpg" class="card" alt="card">';
    dealerCard.innerHTML = `<img src="./images/cardsBack.jpg" class="card" alt="card"></img> <img src="./images/cardsBack.jpg" class="card" alt="card"></img>`
}

// Darken screen and disable buttons
function darkScreen() {
    hitBtn.disabled = true;
    standBtn.disabled = true;
    placeBtn.disabled = true;
    setTimeout(() => {
        playerCard.style.filter = "brightness(0.1)";
        dealerCard.style.filter = "brightness(0.1)";
        standBtn.style.filter = "brightness(0.1)";
        hitBtn.style.filter = "brightness(0.1)";
        chip1.style.filter = "brightness(0.1)";
        chip5.style.filter = "brightness(0.1)";
        chip10.style.filter = "brightness(0.1)";
        chip25.style.filter = "brightness(0.1)";
        chip100.style.filter = "brightness(0.1)";
        placeBtn.style.filter = "brightness(0.1)";
        popUp.style.display = "flex";
    }, 700);
    
}

// Restart game and reset variables and elements to default values 
function restart() {
    playerDeck = [];
    dealerDeck = [];
    pTotal = 0;
    dTotal = 0;
    bet = 0;
    popUp.style.display = "none";
    playerCard.style.filter = "brightness(1)";
    dealerCard.style.filter = "brightness(1)";
    hitBtn.disabled = false;
    standBtn.disabled = false;
    placeBtn.disabled = false;
    standBtn.style.filter = "brightness(1)";
    hitBtn.style.filter = "brightness(1)";
    playerHand.innerHTML = "My cards: ";
    playerCard.innerHTML = "";
    playerTotal.innerHTML = "Total= " + pTotal;
    dealerHand.innerHTML = "Dealer: ";
    dealerCard.innerHTML = "";
    dealerTotal.innerHTML = "";
    chip1.style.filter = "brightness(1)";
    chip5.style.filter = "brightness(1)";
    chip10.style.filter = "brightness(1)";
    chip25.style.filter = "brightness(1)";
    chip100.style.filter = "brightness(1)";
    placeBtn.style.filter = "brightness(1)";
    placeBtn.disabled = true;
    totalBet.innerHTML = "bet: ";
    chip1.style = "pointer-events: auto";
    chip5.style = "pointer-events: auto";
    chip10.style = "pointer-events: auto";
    chip25.style = "pointer-events: auto";
    chip100.style = "pointer-events: auto";
    hitBtn.disabled = true;
    standBtn.disabled = true;
    totalMoney.innerHTML = "Money: " + moneySum;
    initializeDeck()
}

// Add card to player or dealer deck and check for win 
function addCard(playerOrDealer) {
    let num = getRandomCard();
    playerOrDealer.push(cards[num]);

    if (playerOrDealer == playerDeck) {
        let playerHand = document.getElementById("playerHand");
        let playerCard = document.getElementById("playerCard");
        playerHand.innerText = "My cards: " + playerDeck;
        playerCard.innerHTML += cardImgs[num];

    } else if (playerOrDealer == dealerDeck) {
        let dealerHand = document.getElementById("dealerHand");
        let dealerCard = document.getElementById("dealerCard");
        dealerHand.innerText = "Dealer: " + dealerDeck;
        dealerCard.innerHTML += cardImgs[num];
    }
    checkWin();
}

// Check if player or dealer has won
function checkWin() {
    pTotal = 0;
    let ace;
    for (let card of playerDeck) {
        pTotal += card;
        if (card == 11) {
            ace = true;
        }
    }
    if (pTotal > 21 && ace) {
        pTotal -= 10;
    }
    if (pTotal > 21) {
        darkScreen();
        winner.style.color = "red";
        if (moneySum < 1) { // check if user is out of money 
            moneySum = 100;
            localStorage.setItem("moneySum", JSON.stringify(moneySum));
            winner.innerHTML = "Game Over.";
        }else{
            winner.innerText = "You lose :(";
        }
    }
    playerTotal.innerText = "Total= " + pTotal;
}

// handle stand button
function stand() {
    standBtn.disabled = true;
    hitBtn.disabled = true;
    dTotal = 0;
    let ace;
    for (let card of dealerDeck) {
        dTotal += card;
        if (card == 11) {
            ace = true;
        }
    }
    if (dTotal > 21 && ace) {
        dTotal -= 10;
    }
    if (dTotal >= 17) {
        if (pTotal == dTotal) {
            darkScreen();
            winner.innerHTML = "Push";
            winner.style.color = "yellow";
            moneySum += bet;
            totalMoney.innerHTML = "Money: " + moneySum;
        } else if (pTotal > dTotal || dTotal > 21) {
            darkScreen();
            winner.innerHTML = "You Win!";
            winner.style.color = "green";
            moneySum += bet * 2;
            totalMoney.innerHTML = "Money: " + moneySum;
        } else {
            darkScreen();
            winner.style.color = "red";
            if (moneySum < 1) { // check if user is out of money 
                moneySum = 100;
                localStorage.setItem("moneySum", JSON.stringify(moneySum));
                winner.innerHTML = "Game Over.";
            } else {
                winner.innerText = "You lose :(";
            }
        }
    } else {
        addCard(dealerDeck);
        setTimeout(stand, 1000);
    }
    dealerTotal.innerText = "Total= " + dTotal;
    localStorage.setItem("moneySum", JSON.stringify(moneySum))

}

// add chip to bet and check if user is out of money 
function addChip(amount) {
    if (moneySum > 0) {
        moneySum -= amount;
        bet += amount;
        totalMoney.innerHTML = "Money: " + moneySum;
        totalBet.innerHTML = "bet: " + bet;
    } else {
        placeBtn.disabled = true;
    }
    if (moneySum < 100) {
        chip100.style = "pointer-events: none";
        chip100.style.filter = "brightness(0.3)";
    }
    if (moneySum < 25) {
        chip25.style = "pointer-events: none";
        chip25.style.filter = "brightness(0.3)";
    }
    if (moneySum < 10) {
        chip10.style = "pointer-events: none";
        chip10.style.filter = "brightness(0.3)";
    }
    if (moneySum < 5) {
        chip5.style = "pointer-events: none";
        chip5.style.filter = "brightness(0.3)";
    }
    if (moneySum < 1) {
        chip1.style = "pointer-events: none";
        chip1.style.filter = "brightness(0.3)";
    }
    if (bet > 0) {
        placeBtn.disabled = false;
    }
    localStorage.setItem("moneySum", JSON.stringify(moneySum));
}


// handle place bet button 
function placeBet() {
    chip1.style = "pointer-events: none";
    chip5.style = "pointer-events: none";
    chip10.style = "pointer-events: none";
    chip25.style = "pointer-events: none";
    chip100.style = "pointer-events: none";
    chip100.style.filter = "brightness(0.3)";
    chip5.style.filter = "brightness(0.3)";
    chip10.style.filter = "brightness(0.3)";
    chip25.style.filter = "brightness(0.3)";
    chip1.style.filter = "brightness(0.3)";

    hitBtn.disabled = false;
    standBtn.disabled = false;
    placeBtn.disabled = true;

    dealerCard.innerHTML = ''
    playerCard.innerHTML = ''
    addCard(playerDeck);
    addCard(playerDeck);
    addCard(dealerDeck);
}

// event listeners
rstBtn.addEventListener("click", restart)

hitBtn.addEventListener("click", ()=>{
    addCard(playerDeck);
})
standBtn.addEventListener("click", stand)

placeBtn.addEventListener("click", placeBet)

chip1.addEventListener("click", ()=>{
    addChip(1)
})

chip5.addEventListener("click", ()=>{
    addChip(5)
})

chip10.addEventListener("click", ()=>{
    addChip(10)
})

chip25.addEventListener("click", ()=>{
    addChip(25)
})

chip100.addEventListener("click", ()=>{
    addChip(100)
})


// initialize game
hitBtn.disabled = true;
standBtn.disabled = true;
placeBtn.disabled = true;
initializeDeck()



