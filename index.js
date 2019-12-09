/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time) {
  let clock = parseInt(time, 10)
  if (clock < 12) return "Good Morning"
  if (clock > 17) return "Good Evening"
  return "Good Afternoon"
}

function displayMessage(msg) {
  document.getElementById('greeting').innerText = msg
}