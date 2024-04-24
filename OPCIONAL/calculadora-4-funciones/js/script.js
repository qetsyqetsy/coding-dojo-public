// Refactored JavaScript functions
const initialState = {
    currentInput: '0',
    operator: '',
    memory: '0',
    inputMode: 'none' // initial mode is none
};

let { currentInput, operator, memory, inputMode } = initialState;

// Function to handle number input
function press(key) {

    if (inputMode === 'mouse' || !['keyboard', 'mouse'].includes(inputMode)) {
        currentInput = currentInput === '0' && key !== '.' ? key : currentInput + key;
        inputMode = 'keyboard'; // Set input mode to keyboard
    }

    if (key === '.' && currentInput.includes('.')) {
        console.log(key)
        const button = document.querySelector(`[data-key="${key}"]`);
        highlightButton(button);


        return; // Do not add another decimal point

    }

    const button = document.querySelector(`[data-key="${key}"]`);
    highlightButton(button);

    updateDisplay();
    removeFocus();

}

// Function to set the operator for calculations
function setOperator(op) {
    operator = op;
    memory = currentInput;
    currentInput = '0';

    const button = document.querySelector(`[data-key="${op}"]`);
    highlightButton(button);

    removeFocus();
}

// Function to clear the current input
function clearInput() {
    ({ currentInput, memory, inputMode } = initialState);

    const button = document.querySelector(`[data-key="clear"]`);
    highlightButton(button);

    updateDisplay();
    removeFocus();
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
    updateDisplay();
    removeFocus();

    const button = document.querySelector(`[data-key="Enter"]`);
    highlightButton(button);
}

// Function to update the display with the current input
function updateDisplay() {
    document.getElementById('display').innerText = currentInput;
}

// Function to remove focus from the active element
function removeFocus() {
    document.activeElement.blur();
}

// Function to highlight the button temporarily
function highlightButton(button) {
    button.style.backgroundColor = 'skyblue';
    setTimeout(() => {
        button.style.backgroundColor = '';
    }, 100);
}

// Add event listeners for button clicks
document.querySelectorAll('button[data-key]').forEach((button) => {
    button.addEventListener('click', () => {
        const key = button.getAttribute('data-key');
        if (key === 'clear') {
            clearInput();
        } else if (key === 'Enter') {
            calculate();
        } else {
            inputMode = 'mouse'; // set input mode to mouse
            if (['+', '-', '*', '/'].includes(key)) {
                setOperator(key);
            } else {
                console.log('Valid key pressed:', key);
                press(key);
            }
        }
    });
});

// Add event listener for keystrokes
document.addEventListener('keydown', (event) => {
    const key = event.key; // Get the string representation of the pressed key

    console.log('Key pressed:', key); // Log the pressed key for debugging

    if (key === 'Enter') {
        console.log('Enter key pressed');
        calculate();
    } else if (key === 'Escape') {
        console.log('Escape key pressed');
        clearInput();
    } else if (/\d/.test(key)) {
        console.log('Valid key pressed:', key);
        inputMode = 'mouse'; // set input mode to keyboard
        press(key); // Pass the pressed key to the press function
    } else if (['+', '-', '*', '/'].includes(key)) {
        console.log('Operator key pressed:', key);
        setOperator(key);
    } else if (key === '.') {
        console.log('Decimal key pressed');
        inputMode = 'mouse'; // set input mode to keyboard
        press(key);
    }
});



