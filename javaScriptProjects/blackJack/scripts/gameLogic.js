import { cards, cardImgs, bet, pTotal, dealerDeck, moneySum, playerDeck, modifyBet, modifyMoneySum, modifyPTotal, getRandomCard, dTotal, modifyDTotal } from "./init.js"
import { darkScreen } from "./dom.js"



// Add card to player or dealer deck and check for win 
export function addCard(playerOrDealer) {
    let num = getRandomCard();
    playerOrDealer.push(cards[num]);

    if (playerOrDealer == playerDeck) {
        let playerCard = document.getElementById("playerCard");
        playerCard.innerHTML += cardImgs[num];

    } else if (playerOrDealer == dealerDeck) {
        let dealerCard = document.getElementById("dealerCard");
        dealerCard.innerHTML += cardImgs[num];
    }
    checkWin();
}

// Check if player or dealer has won
export function checkWin() {
    modifyPTotal(0);
    let ace;
    for (let card of playerDeck) {
        modifyPTotal(pTotal+card);
        if (card == 11) {
            ace = true;
        }
    }
    if (pTotal > 21 && ace) {
        modifyPTotal(pTotal - 10);
    }
    if (pTotal > 21) {
        darkScreen();
        winner.style.color = "red";
        if (moneySum < 1) { // check if user is out of money 
            modifyMoneySum(100);
            localStorage.setItem("moneySum", JSON.stringify(moneySum));
            winner.innerHTML = "Game Over.";
        } else {
            winner.innerText = "You lose :(";
        }
    }
    playerTotal.innerText = "Total= " + pTotal;
}

// add chip to bet and check if user is out of money 
export function addChip(amount) {
    if (moneySum > 0) {
        modifyMoneySum(moneySum - amount);
        modifyBet(bet + amount);
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


export function stand() {
    standBtn.disabled = true;
    hitBtn.disabled = true;
    modifyDTotal(0);
    let ace;
    for (let card of dealerDeck) {
        modifyDTotal(dTotal + card);
        if (card == 11) {
            ace = true;
        }
    }
    if (dTotal > 21 && ace) {
        modifyDTotal(dTotal - 10);
    }
    if (dTotal >= 17) {
        if (pTotal == dTotal) {
            darkScreen();
            winner.innerHTML = "Push";
            winner.style.color = "yellow";
            modifyMoneySum(moneySum + bet);
            totalMoney.innerHTML = "Money: " + moneySum;
        } else if (pTotal > dTotal || dTotal > 21) {
            darkScreen();
            winner.innerHTML = "You Win!";
            winner.style.color = "green";
            modifyMoneySum(moneySum + bet * 2);
            totalMoney.innerHTML = "Money: " + moneySum;
        } else {
            darkScreen();
            winner.style.color = "red";
            if (moneySum < 1) { // check if user is out of money
                modifyMoneySum(100);
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
    localStorage.setItem("moneySum", JSON.stringify(moneySum));

}





