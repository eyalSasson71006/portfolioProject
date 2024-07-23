import { pTotal, moneySum, modifyBet, modifyDTotal, modifyDealerDeck, modifyPTotal, modifyPlayerDeck, initializeDeck } from "./init.js"
import { addChip } from "./gameLogic.js"

// Get elements from the DOM
export const popUp = document.getElementById("popUp");
export const winner = document.getElementById("winner");
export const dealerCard = document.getElementById("dealerCard");
export const playerCard = document.getElementById("playerCard");
export const playerTotal = document.getElementById("playerTotal");
export const dealerTotal = document.getElementById("dealerTotal");
export const chip1 = document.getElementById("chip1");
export const chip5 = document.getElementById("chip5");
export const chip10 = document.getElementById("chip10");
export const chip25 = document.getElementById("chip25");
export const chip100 = document.getElementById("chip100");
export const totalMoney = document.getElementById("totalMoney");
export const totalBet = document.getElementById("totalBet");
export const placeBtn = document.getElementById("placeBtn");
export const hitBtn = document.getElementById("hitBtn");
export const standBtn = document.getElementById("standBtn");
export const rstBtn = document.getElementById("rstBtn");


// Darken screen and disable buttons
export function darkScreen() {
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
export function restart() {
    modifyPlayerDeck([]);
    modifyDealerDeck([]);
    modifyPTotal(0);
    modifyDTotal(0);
    modifyBet(0);
    popUp.style.display = "none";
    playerCard.style.filter = "brightness(1)";
    dealerCard.style.filter = "brightness(1)";
    hitBtn.disabled = false;
    standBtn.disabled = false;
    placeBtn.disabled = false;
    standBtn.style.filter = "brightness(1)";
    hitBtn.style.filter = "brightness(1)";
    playerCard.innerHTML = "";
    playerTotal.innerHTML = "";
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
    initializeDeck();
    addChip(0);
}