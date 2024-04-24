// Display a message indicating that the page has loaded
console.log("page loaded...");

// Example JavaScript functions
let currentInput = '0';
let operator = '';
let memory = '0';

// Function to handle number input
function press(num) {
    if (num === '.' && currentInput.includes('.')) {
        return; // Do not add another decimal point
    }

    if (currentInput === '0') {
        currentInput = num.toString();
    } else {
        currentInput += num.toString();
    }

    document.getElementById('display').innerText = currentInput;
}

// Function to temporarily change button color when pressed via keyboard
function highlightButton(button) {
    button.style.backgroundColor = 'lightgray';
    // Remove the color change after 100 milliseconds
    setTimeout(() => {
        button.style.backgroundColor = '';
    }, 100);
}

// Add event listeners to buttons for click events
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        press(button.textContent);
        highlightButton(button);
    });
});

// Function to set the operator for calculations
function setOperator(op) {
    operator = op;
    memory = currentInput;
    currentInput = '0';
}

// Function to clear the current input
function clearInput() {
    currentInput = '0';
    document.getElementById('display').innerText = currentInput;
}

// Function to perform calculations based on the operator
function calculate() {
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(memory) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(memory) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(memory) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(memory) / parseFloat(currentInput);
            break;
        default:
            break;
    }
    currentInput = result.toString();
    document.getElementById('display').innerText = currentInput;
}

document.addEventListener('keydown', (event) => {
    const key = event.key;

    // Handle number keys
    if (/^[0-9]$/.test(key)) {
        press(key);
        // Highlight the corresponding button
        const button = document.querySelector(`button[data-key="${key}"]`);
        if (button) {
            highlightButton(button);
        }
    }

    // Handle operator keys
    if (['+', '-', '*', '/'].includes(key)) {
        setOperator(key);
        // Highlight the corresponding button
        const button = document.querySelector(`button[data-key="${key}"]`);
        if (button) {
            highlightButton(button);
        }
    }

    // Handle clear key
    if (key === 'Escape') {
        clearInput();
        // Highlight the clear button
        const button = document.querySelector('button[data-key="clear"]');
        if (button) {
            highlightButton(button);
        }
    }

    // Handle calculate key
    if (key === 'Enter') {
        calculate();
        // Highlight the calculate button
        const button = document.querySelector('button[data-key="calculate"]');
        if (button) {
            highlightButton(button);
        }
    }
});
