// Log a message indicating that the script has been loaded
console.log('loaded...');

// Execute the following code once the DOM content has been fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with the class 'cityName'
    let clickableCities = document.querySelectorAll(".cityName");

    // Iterate over each clickable city element
    clickableCities.forEach(function (heading) {
        // Add a click event listener to each clickable city element
        heading.addEventListener("click", function () {
            // Alert the user that the weather report is being loaded
            alert("Loading weather report...");
        });
    });

    // Get the button element for managing cookies and the cookies notice element
    const cookieBtn = document.getElementById("cookieBtn");
    const cookiesNotice = document.getElementById("cookiesNotice");

    // Add a click event listener to the cookie button
    cookieBtn.addEventListener("click", function () {
        // Hide the cookies notice when the button is clicked
        cookiesNotice.style.display = "none";
    });

    // Get the temperature selector element
    var tempSelector = document.getElementById('tempSelector');

    // Add a change event listener to the temperature selector
    tempSelector.addEventListener('change', function () {
        // Determine whether Fahrenheit or Celsius has been selected
        if (this.value === 'fahrenheit') {
            // Convert temperatures to Fahrenheit
            swapTemperatures(true);
        } else if (this.value === 'celsius') {
            // Convert temperatures to Celsius
            swapTemperatures(false);
        }
    });

    // Function to swap temperatures between Fahrenheit and Celsius
    function swapTemperatures(toFahrenheit) {
        // Select all elements with the class 'numbers'
        var numberDivs = document.querySelectorAll('.numbers');

        // Iterate over each element with the class 'numbers'
        numberDivs.forEach(function (div) {
            // Select the maximum and minimum temperature spans within the current element
            var maxSpan = div.querySelector('.maxTemp');
            var minSpan = div.querySelector('.minTemp');

            // Check if both maximum and minimum temperature spans exist
            if (maxSpan && minSpan) {
                // Convert temperatures based on the selected unit
                if (toFahrenheit) {
                    var maxCelsius = parseFloat(maxSpan.textContent);
                    var minCelsius = parseFloat(minSpan.textContent);

                    // Convert Celsius temperatures to Fahrenheit and update the spans
                    maxSpan.textContent = celsiusToFahrenheit(maxCelsius).toFixed(0) + "°";
                    minSpan.textContent = celsiusToFahrenheit(minCelsius).toFixed(0) + "°";
                } else {
                    var maxFahrenheit = parseFloat(maxSpan.textContent);
                    var minFahrenheit = parseFloat(minSpan.textContent);

                    // Convert Fahrenheit temperatures to Celsius and update the spans
                    maxSpan.textContent = fahrenheitToCelsius(maxFahrenheit).toFixed(0) + "°";
                    minSpan.textContent = fahrenheitToCelsius(minFahrenheit).toFixed(0) + "°";
                }
            }
        });
    }

    // Function to convert Celsius to Fahrenheit
    function celsiusToFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    // Function to convert Fahrenheit to Celsius
    function fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }
});
