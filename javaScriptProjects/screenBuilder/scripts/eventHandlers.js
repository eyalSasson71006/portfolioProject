import {submitBtn, dltElementBtn, rstbtn, hideMenu, showMenu, sideMenu, main } from './domElements.js';
import {updateLocalArr} from './localStorage.js';
import { addNewBlock, reset, updateElements, currentElement} from './utility.js';

export function setupEventListeners() {
    updateElements()

    submitBtn.addEventListener("click", addNewBlock);

    dltElementBtn.addEventListener("click", () => {
        if (currentElement) {
            currentElement.remove();
            reset();
        }
        updateLocalArr();
    });

    //handle collapse menu 
    hideMenu.addEventListener("click", () => {
        sideMenu.style.display = "none";
        hideMenu.style.display = "none";
        showMenu.style.display = "block";
    });
    showMenu.addEventListener("click", () => {
        sideMenu.style.display = "block";
        hideMenu.style.display = "block";
        showMenu.style.display = "none";
    });

    //clear whole page
    rstbtn.addEventListener("click", () => {
        if (confirm("Are you sure you want to delete the page?")) {
            let elements = main.querySelectorAll("*");
            elements.forEach(element => {
                element.remove();
                reset();
            });
            localStorage.clear();
        }
    });

    // add block with a click on the enter key
    document.addEventListener("keypress", e => {
        if (e.key === "Enter") {
            e.preventDefault();
            document.getElementById("submitBtn").click();
        }
    });

}
