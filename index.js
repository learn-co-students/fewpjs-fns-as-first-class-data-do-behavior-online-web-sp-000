/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(time) {
  const hour = parseInt(time, 10)
  if (hour < 0) throw new Error('Below 0')
  if (hour > 24) throw new Error('Above 24')
  if (hour < 12) {
    return "Good Morning"
  } else if (hour > 17) {
    return "Good Evening"
  } else {
    return "Good Afternoon"
  }
}

function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
