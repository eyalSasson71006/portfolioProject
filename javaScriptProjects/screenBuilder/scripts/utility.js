import { elementInput, bgcInput, widthInput, heightInput, contentInput, colorInput, textAlignInput, fontSizeInput, fontFamilyInput, paddingInput, marginInput, borderInput, borderRadiusInput, shadowInput, buttons, main } from './domElements.js';
import { updateLocalArr } from './localStorage.js';

//monitoring and logic variables
export let currentElement = null;
export let editMode = false;

let lorem = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel totam, nisi nemo dolore nobis voluptas, qui soluta molestiae error dolorum dolorem obcaecati, est reprehenderit! Non veritatis doloribus alias facere numquam."

export function addNewBlock() {
    let newBlock = document.createElement(elementInput.value);
    newBlock.style.backgroundColor = bgcInput.value;
    newBlock.style.width = widthInput.value;
    newBlock.style.height = heightInput.value;
    newBlock.innerText = contentInput.value === "lorem" ? lorem : contentInput.value;
    newBlock.style.color = colorInput.value;
    newBlock.style.textAlign = textAlignInput.value;
    newBlock.style.fontSize = fontSizeInput.value;
    newBlock.style.fontFamily = fontFamilyInput.value;
    newBlock.style.padding = paddingInput.value;
    newBlock.style.margin = marginInput.value;
    newBlock.style.border = borderInput.value;
    newBlock.style.borderRadius = borderRadiusInput.value;
    newBlock.style.boxShadow = shadowInput.value;
    if (bgcInput.value && widthInput.value && heightInput.value || contentInput.value) { //Checks if the element is visible
        if (editMode) {
            currentElement.replaceWith(newBlock);
            currentElement = newBlock;
            editMode = false;
        } else {
            main.appendChild(newBlock);
        }
    } else {
        alert("Can't add an invisible element...");
    }

    updateLocalArr();
    updateElements();
    reset();
}


//highlight selected element and enters its values to the side menu
export function handleElementClick(event) {
    let element = event.currentTarget;
    if (currentElement != null) {
        currentElement.classList.remove('selected');
        editMode = false;
    }
    if (currentElement !== element) {
        element.classList.add('selected');
        currentElement = element;
        editMode = true;
    } else {
        currentElement = null;
    }

    if (editMode) {
        buttons.style.display = "block";
        widthInput.value = element.style.width;
        heightInput.value = element.style.height;
        bgcInput.value = element.style.backgroundColor;
        elementInput.value = element.localName;
        contentInput.value = element.innerText;
        colorInput.value = element.style.color;
        textAlignInput.value = element.style.textAlign;
        fontSizeInput.value = element.style.fontSize;
        fontFamilyInput.value = element.style.fontFamily;
        marginInput.value = element.style.margin;
        paddingInput.value = element.style.padding;
        borderInput.value = element.style.border;
        borderRadiusInput.value = element.style.borderRadius;
        shadowInput.value = element.style.boxShadow;

    } else {
        reset(); // clear inputs when deselected
    }
}

//reset all inputs and vars
export function reset() {
    let inputs = document.querySelectorAll("input");
    let textareas = document.querySelectorAll("textarea");
    let selects = document.querySelectorAll("select");
    buttons.style.display = "none";
    editMode = false;
    inputs.forEach(input => {
        if (input.type !== "button") {
            input.value = "";
        }
    });
    textareas.forEach(textarea => {
        textarea.value = "";
    });
    selects.forEach(select => {
        select.selectedIndex = 0;
    });
}

// make sure all the elements have a click event listener
export function updateElements() {
    let mainItems = main.querySelectorAll("*");
    mainItems.forEach((element) => {
        element.removeEventListener("dblclick", handleElementClick);
        element.addEventListener("dblclick", handleElementClick);
    });
}
