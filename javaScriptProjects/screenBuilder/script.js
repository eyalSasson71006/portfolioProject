//define input elements variables
let elementInput = document.getElementById("elementInput");
let bgcInput = document.getElementById("bgcInput");
let widthInput = document.getElementById("widthInput");
let heightInput = document.getElementById("heightInput");
let contentInput = document.getElementById("contentInput");
let colorInput = document.getElementById("colorInput");
let textAlignInput = document.getElementById("textAlignInput");
let fontSizeInput = document.getElementById("fontSizeInput");
let fontFamilyInput = document.getElementById("fontFamilyInput");
let paddingInput = document.getElementById("paddingInput");
let marginInput = document.getElementById("marginInput");
let borderInput = document.getElementById("borderInput");
let borderRadiusInput = document.getElementById("borderRadiusInput");
let shadowInput = document.getElementById("shadowInput");

//monitoring and logic variables
let count = 1;
let currentElement = null;
let editMode = false;

//main element and buttons
let btn = document.getElementById("btn");
let dltElementBtn = document.getElementById("dltElementBtn");
let rstbtn = document.getElementById("rstbtn");
let hideMenu = document.getElementById("hideMenu");
let showMenu = document.getElementById("showMenu");
let buttons = document.getElementById("buttons");
let sideMenu = document.getElementById("sideMenu");
let main = document.getElementById("main");

if (!localStorage.getItem("elementsArr")) {
    localStorage.setItem("elementsArr", JSON.stringify([])); // Initialize as an empty JSON array
}

let elementsArr = JSON.parse(localStorage.getItem("elementsArr")); // Parse the JSON string to an array


// add all the previous elements from local storage
for (let element of elementsArr) {
    let newBlock = document.createElement(element.type);
    newBlock.id = element.id;
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
    count++;
}

function addNewBlock() {
    let newBlock = document.createElement(elementInput.value);
    if (editMode) {
        newBlock.id = currentElement.id;
    } else {
        newBlock.id = `${elementInput.value}_${count}`;
    }
    newBlock.localName = elementInput.value;
    newBlock.style.backgroundColor = bgcInput.value;
    newBlock.style.width = widthInput.value;
    newBlock.style.height = heightInput.value;
    if (contentInput.value == "lorem"){
        newBlock.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel totam, nisi nemo dolore nobis voluptas, qui soluta molestiae error dolorum dolorem obcaecati, est reprehenderit! Non veritatis doloribus alias facere numquam."
    }else{
        newBlock.innerText = contentInput.value;
    }
    newBlock.style.color = colorInput.value;
    newBlock.style.textAlign = textAlignInput.value;
    newBlock.style.fontSize = fontSizeInput.value;
    newBlock.style.fontFamily = fontFamilyInput.value;
    newBlock.style.padding = paddingInput.value;
    newBlock.style.margin = marginInput.value;
    newBlock.style.border = borderInput.value;
    newBlock.style.borderRadius = borderRadiusInput.value;
    newBlock.style.boxShadow = shadowInput.value;

    if (editMode) {
        currentElement.replaceWith(newBlock);
        currentElement = newBlock;
        editMode = false;
    } else {
        main.appendChild(newBlock);
        count++;
    }

    updateLocalArr()
    updateElements();
    reset();
}

// Update the elementsArr and save to localStorage
function updateLocalArr(){
    let allElements = main.querySelectorAll("*");
    elementsArr = [];
    allElements.forEach(element => {
        elementsArr.push({
            id: element.id,
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


// make sure all the elements have a click event listener
function updateElements() {
    let mainItems = main.querySelectorAll("*");
    mainItems.forEach((element) => {
        element.removeEventListener("dblclick", handleElementClick);
        element.addEventListener("dblclick", handleElementClick);
    });
}

//highlight selected element and enters its values to the side menu
function handleElementClick(event) {
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
        element = document.getElementById(element.id);
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
function reset() {
    let inputs = document.querySelectorAll("input");
    let textareas = document.querySelectorAll("textarea");
    let selects = document.querySelectorAll("select");
    buttons.style.display = "none";
    editMode = false;
    inputs.forEach(input => {
        if (input.type != "button") {
            input.value = "";
            input.readOnly = false;
        }
    });
    textareas.forEach(textarea => {
        textarea.value = "";
    });
    selects.forEach(select => {
        select.selectedIndex = 0;
    });
}

dltElementBtn.addEventListener("click", () => {
    if (currentElement) {
        currentElement.remove();
        reset();
    }
    updateLocalArr()
});

document.addEventListener('DOMContentLoaded', updateElements);

btn.addEventListener("click", addNewBlock);

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
        localStorage.clear()
    }
});



/*
 - add elements inside a div
 
 - add img input

  - check if count var works correctly***8

*/