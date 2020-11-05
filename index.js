/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(string) {
  const time = parseInt(string.split(':')[0]);
  if (time < 12) { return "Good Morning" }
  else if (16 < time) { return "Good Evening" }
  else { return "Good Afternoon" }
}

/* Write your implementation of displayMessage() */

function displayMessage(string) {
  const greeting = document.getElementById("greeting")
  greeting.innerText = string
}
