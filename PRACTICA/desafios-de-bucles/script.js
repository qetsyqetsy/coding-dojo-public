// Function to log messages to the console
function log(message) {
    const consoleDiv = document.getElementById('console');
    const p = document.createElement('p');
    p.textContent = message;
    consoleDiv.appendChild(p);
    consoleDiv.scrollTop = consoleDiv.scrollHeight;
}

// Function to clear the console
function clearConsole() {
    const consoleDiv = document.getElementById('console');
    consoleDiv.innerHTML = ''; // Clear the console
}

// Exercise 1: Imprimir impares 1 a 20
document.getElementById('exercise1').addEventListener('click', () => {
    clearConsole(); // Clear the console before displaying new output
    for (let i = 1; i <= 20; i += 2) {
        log(i);
    }
});

// Exercise 2: Disminuir múltiplos de 3
document.getElementById('exercise2').addEventListener('click', () => {
    clearConsole(); // Clear the console before displaying new output
    for (let i = 100; i >= 0; i--) {
        if (i % 3 === 0) {
            log(i);
        }
    }
});

// Exercise 3: Imprime la secuencia
document.getElementById('exercise3').addEventListener('click', () => {
    clearConsole(); // Clear the console before displaying new output
    for (let i = 4; i >= -3.5; i -= 1.5) {
        log(i);
    }
});

// Exercise 4: Sigma
document.getElementById('exercise4').addEventListener('click', () => {
    clearConsole(); // Clear the console before displaying new output
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    log(sum);
});

// Exercise 5: Factorial
document.getElementById('exercise5').addEventListener('click', () => {
    clearConsole(); // Clear the console before displaying new output
    let product = 1;
    for (let i = 1; i <= 12; i++) {
        product *= i;
    }
    log(product);
});
