/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  const hoursInt = parseInt(timeString.split(":")[0])
  if (hoursInt < 12) {
    return "Good Morning"
  } else if (hoursInt > 16) {
    return "Good Evening"
  } else {
    return "Good Afternoon"
  }
}

console.log(greet("17:11"))
/* Write your implementation of displayMessage() */

function displayMessage(message) {
  document.getElementById('greeting').textContent = message
}
