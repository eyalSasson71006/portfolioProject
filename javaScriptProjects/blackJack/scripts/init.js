import { setupEventListeners } from "./eventHandlers.js";
import { addChip } from "./gameLogic.js";

// Initialize player and dealer decks
export let playerDeck = [];
export function modifyPlayerDeck(value) {playerDeck = value}
export let dealerDeck = [];
export function modifyDealerDeck(value) { dealerDeck = value; }

// Initialize player and dealer totals
export let pTotal;
export function modifyPTotal(value) { pTotal = value; }

export let dTotal;
export function modifyDTotal(value) { dTotal = value; }

// Initialize player and dealer money
export let moneySum = JSON.parse(localStorage.getItem("moneySum")) || 100;
export function modifyMoneySum(value) { moneySum = value; }

export let bet = 0;
export function modifyBet(value) { bet = value; }

totalMoney.innerHTML = "Money: " + moneySum;

// Initialize card images
export const cards = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
export const cardImgs = [
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
export function getRandomCard() {
    let num = Math.floor(Math.random() * 13);
    return num;
}

//initialize hidden cards to dealer and user
export function initializeDeck() {
    playerCard.innerHTML = '<img src="./images/cardsBack.jpg" class="card" alt="card"> <img src="./images/cardsBack.jpg" class="card" alt="card">';
    dealerCard.innerHTML = `<img src="./images/cardsBack.jpg" class="card" alt="card"></img> <img src="./images/cardsBack.jpg" class="card" alt="card"></img>`;
}

// initialize game
hitBtn.disabled = true;
standBtn.disabled = true;
placeBtn.disabled = true;
setupEventListeners();
initializeDeck(); //load blank cards
addChip(0); //disable the chips the player can't afford