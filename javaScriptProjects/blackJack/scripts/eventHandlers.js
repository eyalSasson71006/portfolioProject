import { playerDeck, dealerDeck} from "./init.js";
import { addChip, addCard, stand } from "./gameLogic.js"
import { restart } from "./dom.js"

// event listeners
export function setupEventListeners() {
    
    standBtn.addEventListener("click", stand);
    
    placeBtn.addEventListener("click", () => {
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
    
        dealerCard.innerHTML = '';
        playerCard.innerHTML = '';
        addCard(playerDeck);
        addCard(playerDeck);
        addCard(dealerDeck);
    });
    
    rstBtn.addEventListener("click", restart);
    
    hitBtn.addEventListener("click", () => {
        addCard(playerDeck);
    });
    
    chip1.addEventListener("click", () => {
        addChip(1);
    });
    
    chip5.addEventListener("click", () => {
        addChip(5);
    });
    
    chip10.addEventListener("click", () => {
        addChip(10);
    });
    
    chip25.addEventListener("click", () => {
        addChip(25);
    });
    
    chip100.addEventListener("click", () => {
        addChip(100);
    });
}
