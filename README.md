# basic calculator
Description:
This project is a simple web-based calculator that performs basic arithmetic operations such as addition, subtraction, multiplication, and division. It features a responsive design, making it suitable for use on various screen sizes.

Features:
Perform basic arithmetic operations: addition, subtraction, multiplication, and division.
Clear button to reset the calculator display.
Support for keyboard input for numbers and basic operations.
Responsive design to adapt to different screen sizes.
Technologies Used:
HTML5
CSS3
JavaScript
Bootstrap 4.5.2
Google Fonts
File Structure:
index.html: The main HTML file containing the structure of the webpage and the calculator.
style.css: Custom CSS file for additional styling.
script.js: JavaScript file containing the logic for the calculator's functionality.
How to Use:
Open index.html in a web browser:

The calculator interface will be displayed.
Use the on-screen buttons or your keyboard to enter numbers and perform calculations.
Calculator Buttons:

Numbers (0-9 and 00) to input values.
Operators (+, -, *, /) to perform operations.
CLEAR button to reset the display.
= button to compute the result of the current arithmetic operation.
Keyboard Support:

Numbers (0-9) and basic operations (+, -, *, /) are supported.
Backspace to clear the display.
Enter to compute the result.
HTML Structure Overview
Head Section:

Includes meta tags for character set and viewport settings.
Links to Bootstrap CSS, custom CSS, and Google Fonts.
Body Section:

Contains a div with class basic to center the calculator vertically and horizontally.
The calculator is wrapped in a div with class container and nested within a Bootstrap row and col for responsive layout.
The calculator itself includes an input field (#display) and multiple buttons for digits and operations.
CSS (style.css)
Styles for the calculator interface, including background colors, button sizes, and responsiveness.
Media queries to adjust the calculator's width based on screen size.
JavaScript (script.js)
Refer(value): Appends the clicked button's value to the display.
Clear(): Clears the display.
Equal(): Evaluates the expression in the display and shows the result.
Event listeners for keypress and keydown events to support keyboard input.
Dependencies
Bootstrap 4.5.2
jQuery 3.5.1
Popper.js 1.16.1
Bootstrap Bundle 4.5.2
Google Fonts - Playwrite NZ

Ensuring that style.css and script.js files are correctly linked and present in the same directory as index.html for the webpage to function properly.
 
