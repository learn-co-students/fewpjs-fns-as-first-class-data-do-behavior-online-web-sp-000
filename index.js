/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  var oldTime = time.split(':');
  var newTime = parseInt(oldTime)
  if (newTime < 12) {
    return `Good Morning`;
  }
  if (newTime > 17) {
    return `Good Evening`;
  }
  return `Good Afternoon`
}
/* Write your implementation of displayMessage() */

function displayMessage(message) {
  let element = document.getElementById("greeting").innerText = message;
}
