/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(t) {
  const formatTime = parseInt(t.split(':')[0])
  if (formatTime < 12) {
    return "Good Morning"
  } else if (formatTime >= 12 && formatTime < 17 ) {
    return "Good Afternoon"
  }
    return "Good Evening"
}

/* Write your implementation of displayMessage() */
function displayMessage(greet) {
  const greetingMessage = document.getElementById('greeting')
  greetingMessage.innerText = greet
}
