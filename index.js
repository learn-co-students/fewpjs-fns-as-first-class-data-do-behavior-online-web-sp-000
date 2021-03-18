/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(timeString) {
  const splitString = timeString.split(':')[0];
  const timeInt = parseInt(splitString, 10)
  if (timeInt < 12) {
    return "Good Morning"
  } else if (timeInt < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
  
};

function displayMessage(message) {
  const greeting = document.getElementById('greeting')
  greeting.innerText = message
}
