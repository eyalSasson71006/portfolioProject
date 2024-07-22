import { main } from './domElements.js';


export let elementsArr = JSON.parse(localStorage.getItem("elementsArr")) || [];

// Update the elementsArr and save to localStorage
export function updateLocalArr() {
    let allElements = main.querySelectorAll("*");
    elementsArr = [];
    allElements.forEach(element => {
        elementsArr.push({
            type: element.localName,
            backgroundColor: element.style.backgroundColor,
            width: element.style.width,
            height: element.style.height,
            innerText: element.innerText,
            color: element.style.color,
            textAlign: element.style.textAlign,
            fontSize: element.style.fontSize,
            fontFamily: element.style.fontFamily,
            padding: element.style.padding,
            margin: element.style.margin,
            border: element.style.border,
            borderRadius: element.style.borderRadius,
            boxShadow: element.style.boxShadow
        });
    });
    localStorage.setItem("elementsArr", JSON.stringify(elementsArr)); // Save as JSON string
}

// add all the previous elements from local storage
export function initializeElements() {
    elementsArr.forEach(element => {
        let newBlock = document.createElement(element.type);
        newBlock.style.backgroundColor = element.backgroundColor;
        newBlock.style.width = element.width;
        newBlock.style.height = element.height;
        newBlock.innerText = element.innerText;
        newBlock.style.color = element.color;
        newBlock.style.textAlign = element.textAlign;
        newBlock.style.fontSize = element.fontSize;
        newBlock.style.fontFamily = element.fontFamily;
        newBlock.style.padding = element.padding;
        newBlock.style.margin = element.margin;
        newBlock.style.border = element.border;
        newBlock.style.borderRadius = element.borderRadius;
        newBlock.style.boxShadow = element.boxShadow;
        main.appendChild(newBlock);
    });
}

