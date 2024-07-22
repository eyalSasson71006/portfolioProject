# Project: Dynamic Webpage Builder

## Overview
This project is a dynamic webpage builder that allows users to create, edit, and style various HTML elements directly on the webpage. Users can customize the appearance and content of the elements, and the changes are saved using localStorage to persist across sessions.

## Files

### index.html
- The main HTML file that includes the structure of the webpage and links to the CSS and JavaScript files.

### style.css
- The CSS file that contains the styles for the webpage layout and elements.

### main.js
- The main JavaScript file that initializes the webpage and sets up event listeners.

### domElements.js
- Contains references to all the DOM elements used in the project.

### localStorage.js
- Handles the retrieval and storage of element data in localStorage.

### eventHandlers.js
- Contains functions for setting up event listeners on various elements.

### utility.js
- Provides utility functions for adding new blocks, handling element clicks, resetting the form, and updating elements.

## Functionalities

### 1. Adding New Elements
- Users can add new HTML elements (div, p, h1, etc.) by selecting the element type and setting its properties (background color, width, height, content, etc.).
- The `addNewBlock` function in `utility.js` handles the creation and styling of these new elements.
- New elements are appended to the main container (`#main`).
- The inputs does'nt limit the user for a specific measurement unit so you can choose between px, %, em, etc. (same for the color unit: hex, rgb, etc.).
- By typing "lorem" in the text input generative text will be inserted.

### 2. Editing Elements
- Users can double-click on an existing element to edit its properties.
- When an element is selected, its current properties are loaded into the form for easy editing.
- The `handleElementClick` function in `utility.js` manages the selection and editing state of elements.

### 3. Deleting Elements
- Users can delete the currently selected element by clicking the delete button (`#dltElementBtn`).
- The `updateLocalArr` function in `localStorage.js` updates the localStorage data to reflect the deletion.

### 4. Resetting the Page
- Users can reset the entire page by clicking the reset button (`#rstbtn`). This will remove all elements and clear localStorage.
- The reset operation is confirmed with a prompt to prevent accidental deletion.

### 5. Toggling the Side Menu
- Users can hide and show the side menu using the buttons (`#hideMenu` and `#showMenu`).
- This is managed by simple show/hide functionality attached to these buttons.

### 6. Saving and Loading Elements
- All elements and their properties are saved in localStorage, ensuring that they persist across page reloads.
- The `initializeElements` function in `localStorage.js` retrieves and recreates elements from localStorage on page load.

### 7. Utility Functions
- `reset`: Clears the form inputs and resets the editing state.
- `updateElements`: Adds event listeners for double-click on all elements inside the main container.

## Getting Started

### Running the Project
1. Open the `index.html` file in your web browser.
2. Use the form on the side menu to add and style new elements.
3. Double-click on any element to edit its properties.
4. Use the delete button to remove an element.
5. Use the reset button to clear all elements from the page.
6. Hide or show the side menu using the respective buttons.

## Notes
-The project highlights flexibility and most of the inputs are open to allow all inputs, if an input is not valid the change won't be applied.
- The project uses vanilla JavaScript and does not require any external libraries or frameworks.
- All the data is stored in the browser's localStorage, so clearing the browser's storage will remove all saved elements.

Enjoy building your dynamic webpage!
