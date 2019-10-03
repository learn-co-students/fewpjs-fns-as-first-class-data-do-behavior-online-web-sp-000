/* Given Code, don't edit */

function handleClick(e) {
    const timeString = document.getElementById('time').value

    displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {

    // convert a string to a number
    let time = parseInt(string);

    // if number is earlier than 12pm
    if (time === 0) {
        return "That's not a valid time";
    } else if (time <= 12) {
        return "Good Morning";
    } else if (time >= 17) {
        return "Good Evening";
    } else {
        return "Good Afternoon";
    }

}

/* Write your implementation of displayMessage() */
function displayMessage(string) {
    let message = document.getElementById("greeting");
    message.innerText = string;

    // let oneLiner = document.getElementById("greeting").innerText = string;

}
