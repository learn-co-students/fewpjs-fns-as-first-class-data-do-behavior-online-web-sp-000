/* Given Code, don't edit */

function handleClick(e) {
    const timeString = document.getElementById('time').value
    displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString) {
    const splitTime = timeString.split(':');
    const hour = parseInt(splitTime[0], 10);

    if (hour > 17) return "Good Evening"
    if (hour > 12) return "Good Afternoon"
    return "Good Morning"
}



/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function displayMessage(string) {
    let greetingNode = document.getElementById('greeting')
    greetingNode.innerText = string

}