/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
    const timeString = document.getElementById('time').value
    displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
    // Convert time string to number
    time = time.split(":");
    time = parseInt(time[0]);
    let greeting;

    // Determine time and display greet
    if (time < 12) {
        greeting = "Good Morning";
    } else if (time >= 12 && time <= 17) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }
    return greeting;
}
/* Write your implementation of displayMessage() */
function displayMessage(message) {
    document.getElementById('greeting').innerText = message;
}