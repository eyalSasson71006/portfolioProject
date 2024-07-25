User Management System
Project Overview
This project is a simple user management system featuring login, registration, and an admin panel. The system is built using HTML, CSS, and JavaScript, and uses localStorage to store user data. The key functionalities include user registration, login, and admin features for user management.

Project Structure:
- login.html: The login page where users can enter their username and password to log in.
- register.html: The registration page where new users can sign up by providing necessary details.
- index.html: The welcome page displayed after successful login, personalized with a greeting for the user.
- adminCrm.html: The admin panel for managing users, accessible only to users with admin privileges.

Key Features:
1. Login Page (login.html)
Functionality: Allows users to log in by entering a username and password.
Buttons:
Log In: Authenticates the user and redirects to the appropriate page (index.html for regular users, adminCrm.html for admins).
Register: Redirects to the registration page (register.html).
Validation: Checks if the entered credentials match any user stored in localStorage.

2. Registration Page (register.html)
Functionality: Enables new users to register by providing a full name, username, email, and password.
Buttons:
Register: Registers the user and redirects to the welcome page (index.html).
Validation:
Ensures that the name and username are at least 2 characters long.
Verifies the password length (8-20 characters) and checks for at least one letter and one special character.
Checks if the email already exists in the system.
Admin Checkbox: Option to register as an admin.

3. Welcome Page (index.html)
Functionality: Displays a welcome message and a logout button.
Greeting: Personalized message displaying the user's name.
Logout Button: Logs out the user by clearing the currentUser data from localStorage and redirects to the login page.

4. Admin CRM Page (adminCrm.html)
Functionality: Allows admin users to manage all registered users.
User Management:
Displays a table with user details: name, username, email, last login date, and admin status.
Actions:
Delete: Removes the user from the system.
Make Admin/Remove Admin: Toggles the user's admin status.
Logout Button: Logs out the admin by clearing the currentUser data from localStorage and redirects to the login page.


JavaScript Files
- login.js: Handles login logic and redirects based on user role.
- register.js: Manages user registration, including validation and data storage.
- index.js: Loads the welcome message for logged-in users and handles logout.
- adminCrm.js: Provides functionality for admin users to manage other users, including deletion and changing admin status.

Storage
localStorage: Used to store and retrieve user information. Each user object contains:
name: User's full name.
email: User's email address.
username: Unique username for login.
password: User's password (stored in plaintext for simplicity, not recommended for production).
isAdmin: Boolean indicating if the user has admin privileges.
lastLogged: Timestamp of the last login.

Usage
Register a new user or admin by navigating to register.html.
Login using login.html with the registered credentials.
Regular users are redirected to index.html after login.
Admin users are redirected to adminCrm.html to manage user data.
Use the Logout button to log out from any page.