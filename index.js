const screenElement = document.getElementById("screenElement");

const sign = document.getElementById("btn-sign");
const clear = document.getElementById("btn-clear");
const comma = document.getElementById("btn-comma");
const zero = document.getElementById("btn0");
const one = document.getElementById("btn1");
const two = document.getElementById("btn2");
const three = document.getElementById("btn3");
const four = document.getElementById("btn4");
const five = document.getElementById("btn5");
const six = document.getElementById("btn6");
const seven = document.getElementById("btn7");
const eight = document.getElementById("btn8");
const nine = document.getElementById("btn9");

const add = document.getElementById("btn-add");
const subtract = document.getElementById("btn-sub");
const multiply = document.getElementById("btn-mltpy");
const divide = document.getElementById("btn-divide");
const equal = document.getElementById("btn-equal");

let currentExpression = ""; // Stores the full expression

// Function to update the screen
function updateScreen() {
    const maxLength = 15; // Set max characters for display
    if (currentExpression.length > maxLength) {
        currentExpression = currentExpression.slice(0, maxLength); // Truncate if too long
    }
    screenElement.textContent = currentExpression || "0"; // Display 0 if empty
}


// Function to append numbers and operators
function appendToExpression(value) {
    currentExpression += value;
    updateScreen();
}

// Function to clear the screen
function clearScreen() {
    currentExpression = "";
    updateScreen();
}

// Function to evaluate the expression
function evaluateExpression() {
    try {
        currentExpression = eval(currentExpression).toString(); // Evaluate and convert to string
    } catch (error) {
        currentExpression = "Error"; // Handle invalid input
    }
    updateScreen();
}

// Event Listeners for Number Buttons
zero.addEventListener("click", () => appendToExpression("0"));
one.addEventListener("click", () => appendToExpression("1"));
two.addEventListener("click", () => appendToExpression("2"));
three.addEventListener("click", () => appendToExpression("3"));
four.addEventListener("click", () => appendToExpression("4"));
five.addEventListener("click", () => appendToExpression("5"));
six.addEventListener("click", () => appendToExpression("6"));
seven.addEventListener("click", () => appendToExpression("7"));
eight.addEventListener("click", () => appendToExpression("8"));
nine.addEventListener("click", () => appendToExpression("9"));

// Event Listeners for Operator Buttons
add.addEventListener("click", () => appendToExpression("+"));
subtract.addEventListener("click", () => appendToExpression("-"));
multiply.addEventListener("click", () => appendToExpression("*"));
divide.addEventListener("click", () => appendToExpression("/"));

// Special Buttons
clear.addEventListener("click", clearScreen);
equal.addEventListener("click", evaluateExpression);
comma.addEventListener("click", () => appendToExpression(".")); // Decimal point
sign.addEventListener("click", () => {
    if (currentExpression) {
        currentExpression = (-1 * parseFloat(currentExpression)).toString();
        updateScreen();
    }
});
