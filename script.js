let hoursElement = document.getElementById('hours');
let minutesElement = document.getElementById('minutes');
let secondsElement = document.getElementById('seconds');

let totalSeconds = 60; // Set the total seconds for the timer (e.g., 1 hour, 1 minute, and 1 second)

function updateTimer() {
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    hoursElement.textContent = String(hours).padStart(2, '0');
    minutesElement.textContent = String(minutes).padStart(2, '0');
    secondsElement.textContent = String(seconds).padStart(2, '0');

    if (totalSeconds > 0) {
        totalSeconds--;
    } else {
        totalSeconds = 3661; // Reset to initial value, e.g., 1 hour, 1 minute, and 1 second
    }
}

setInterval(updateTimer, 1000);
updateTimer(); // Initialize the timer
