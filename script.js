// Append the given value to the display and scroll to the right
function Refer(Value){
    document.getElementById('display').value += Value;
    display.scrollLeft = display.scrollWidth;
}

// Clear the display
function Clear(){
    document.getElementById('display').value = '';
}

// Add event listener for keypress events to handle digit and operator inputs
document.addEventListener('keypress', function(event){
    // Check if the pressed key is a digit (0-9) and append it to the display
    if(event.key >= '0' && event.key <= '9' ){
        Refer(event.key);
    }
    // Check if the pressed key is an operator (/ + - *) and append it to the display
    if(event.key == '/' || event.key == '+' || event.key == '-' || event.key == '*'){
        Refer(event.key);
    }
});

// Add event listener for keydown events to handle backspace and enter keys
document.addEventListener('keydown', function(event){
    // Clear the display if the backspace key is pressed
    if(event.key == 'Backspace'){
        Clear();
    }
    // Evaluate the expression if the enter key is pressed
    if(event.key == 'Enter'){
        Equal()
    }
});

// Evaluate the expression in the display and show the result
function Equal() {
    document.getElementById("display").value = eval(document.getElementById("display").value);
}