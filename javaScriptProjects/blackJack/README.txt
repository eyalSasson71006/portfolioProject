# Card Game Project

## Description
This project is a simple card game implemented in HTML, CSS, and JavaScript. The game allows players to place bets, draw cards, and attempt to beat the dealer by getting a hand value closer to 21 without exceeding it.

## Files Structure
The project is divided into several files to maintain readability and organization:

1. **index.html**: Contains the structure of the web page.
2. **style.css**: Contains the styles for the web page.
3. **init.js**: Contains initialization and setup code.
4. **dom.js**: Contains code related to interacting with the DOM.
5. **gameLogic.js**: Contains the game mechanics and logic.
6. **eventHandlers.js**: Contains event listeners and handlers for user interactions.

## Functionalities

### Initialization and Setup (init.js)
- Initializes player and dealer decks.
- Initializes player and dealer totals.
- Initializes player and dealer money.
- Defines card values and corresponding images.
- Defines a function to get a random card (`getRandomCard`).
- Defines a function to initialize hidden cards for the dealer and player (`initializeDeck`).
- Makes sure that all buttons are disabled before setting a bet
- Adds all the event listeners ('setupEventListeners').
- initialize hidden cards for the dealer and player (`initializeDeck`)
- disable the chips the player can't afford ('addChip').

### DOM Manipulation (dom.js)
- Retrieves elements from the DOM.
- Defines a function to darken the screen and disable buttons (`darkScreen`).
- Defines a function to restart the game and reset variables and elements to their default values (`restart`).

### Game Logic (gameLogic.js)
- Defines a function to add a card to the player or dealer's deck and check for a win (`addCard`).
- Defines a function to check if the player or dealer has won (`checkWin`).
- Defines a function to add a chip to total bet and update the possibility's accordingly (`addChip`).
- Defines a function to handle the stand action, comparing player and dealer totals (`stand`).

### Event Handlers (eventHandlers.js)
- Adds an event listener to the place bet button, initializing the game and dealing cards when a bet is placed (`placeBtn.addEventListener`).
- Adds an event listener to the hit button, allowing the player to draw a card (`hitBtn.addEventListener`).
- Adds an event listener to the stand button, ending the player's turn and allowing the dealer to draw cards (`standBtn.addEventListener`).
- Adds an event listener to the reset button, restarting the game (`rstBtn.addEventListener`).
- Adds an event listener to all the chips buttons, adding said amount to the total bet (`chip[].addEventListener`).


## How to Run
1. Open the `index.html` file in a web browser.
2. The game will load, displaying the initial setup.
3. Use the buttons to place bets, draw cards, and attempt to beat the dealer.

## Notes
- Player starts with 100 units of money, which is saved in local storage.
- The game ends when the player runs out of money, resetting the money to 100 units.
- All DOM elements and game logic are clearly separated for better maintainability.

