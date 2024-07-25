### README.txt

# Flag Guessing Game

## Overview
The Flag Guessing Game is a web-based application that challenges users to identify the country represented by a displayed flag. The game fetches flag data from the REST Countries API and provides an interactive platform for users to test and improve their knowledge of world flags. The application includes two main features: the game itself and a "Discover" section that allows users to explore information about different countries.

## Files and Structure

### HTML Files
1. **index.html** - The main entry point for the game. It includes the game interface where users can see the flag, enter their guesses, and view their score.
2. **discover.html** - The entry point for the "Discover" section, where users can search and learn about various countries.

### JavaScript Files
1. **mainScript.js** - Handles the game logic, including fetching flag data, checking user guesses, updating the score, and managing the user interface.
2. **domBuilder.js** - Provides functionality for creating and managing the display of country cards, used in the "Discover" section.
3. **discover.js** - Manages the search functionality and navigation in the "Discover" section.
4. **countries.js** - Contains functions for fetching and filtering country data from the REST Countries API.

### CSS Files
- **mainStyle.css** , **discover.css**- Contains the styling for the application, ensuring a consistent and visually appealing design.

## Game Functionality

### Main Features
1. **Display Flags**: The application randomly selects a country and displays its flag.
2. **User Input**: Users can input their guesses for the country name.
3. **Score Tracking**: The user's score is tracked and displayed based on correct guesses.
4. **Skip Functionality**: Users can skip a flag, and the correct answer is revealed.
5. **Storage**: The game stores the user's score and correctly guessed countries in local storage, allowing for progress to be maintained across sessions.

### Game Flow
1. The game starts by displaying a random flag.
2. Users enter their guess into the provided input field and submit it.
3. The game checks if the guess is correct:
   - If correct, the score is increased, and the next flag is shown.
   - If incorrect, the user is prompted to try again.
4. Users can also choose to skip a flag, in which case the correct answer is displayed.
5. The game continues until all flags have been guessed, at which point a congratulatory message is displayed.

## Discover Section

### Features
1. **Search Functionality**: Users can search for countries by name.
2. **Country Information**: Displayed in card format, including information like capital, population, languages, and continents.
3. **Navigation**: Users can navigate back to the game from this section.

## Technologies Used
- **HTML**: For structuring the web pages.
- **CSS**: For styling the application.
- **JavaScript**: For handling logic and interactivity.
- **REST Countries API**: For fetching country data, including flags and details.

## How to Run
1. Ensure you have an internet connection to fetch data from the REST Countries API.
2. Open `index.html` in a web browser to start the game.
3. To explore countries, navigate to `discover.html`.

## Credits
This project uses data from the REST Countries API. All images and information are sourced from this API.
