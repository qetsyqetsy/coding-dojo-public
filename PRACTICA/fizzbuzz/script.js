// Define the FizzBuzz function
function fizzBuzz() {
    let output = '';
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output += "FizzBuzz<br>";
        } else if (i % 3 === 0) {
            output += "Fizz<br>";
        } else if (i % 5 === 0) {
            output += "Buzz<br>";
        } else {
            output += i + "<br>";
        }

        // Display the output after each iteration with a delay
        setTimeout(() => {
            outputArea.innerHTML = output;
        }, i * 100); // Change 100 to adjust the delay (in milliseconds)
    }
}

// Get the output area element
const outputArea = document.querySelector('.output');

// Call the fizzBuzz function
fizzBuzz();
