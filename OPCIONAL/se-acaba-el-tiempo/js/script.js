function getSecondsSinceStartOfDay() {
    const now = new Date(); // Get the current date and time
    const seconds = now.getSeconds(); // Get the current seconds
    const minutes = now.getMinutes(); // Get the current minutes
    const hours = now.getHours(); // Get the current hours
    return seconds + minutes * 60 + hours * 3600; // Calculate total seconds since the start of the day
}

setInterval(function() {
    const time = getSecondsSinceStartOfDay(); // Get the total seconds since the start of the day
    const secondsDeg = (time % 60) * 6 - 180; // Calculate the degree for the seconds hand
    const minutesDeg = ((time / 60) % 60) * 6 - 180; // Calculate the degree for the minutes hand
    const hoursDeg = ((time / 3600) % 12) * 30 - 180; // Calculate the degree for the hours hand and adjust to start at 12 o'clock

    const secondsHand = document.getElementById('seconds'); // Get the seconds hand element
    const minutesHand = document.getElementById('minutes'); // Get the minutes hand element
    const hoursHand = document.getElementById('hour'); // Get the hours hand element
    
    secondsHand.style.transform = `rotate(${secondsDeg}deg)`; // Rotate the seconds hand
    minutesHand.style.transform = `rotate(${minutesDeg}deg)`; // Rotate the minutes hand
    hoursHand.style.transform = `rotate(${hoursDeg}deg)`; // Rotate the hours hand

    console.log(`Seconds: ${time % 60}, Minutes: ${Math.floor(time / 60) % 60}, Hours: ${Math.floor(time / 3600) % 12}`); // Log the current time
    console.log(`Seconds Hand: ${secondsDeg} deg, Minutes Hand: ${minutesDeg} deg, Hours Hand: ${hoursDeg} deg`); // Log the degrees for each hand
}, 1000); // Update the clock every second
