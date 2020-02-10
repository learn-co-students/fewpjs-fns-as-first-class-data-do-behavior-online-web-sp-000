/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(t) {
  let time = parseInt(t, 10)
  if (time >= 0 && time < 12) {
    return "Good Morning"
  }
  else if (time > 17 && time < 24) {
    return "Good Evening"
  }
  else {
    return "Good Afternoon"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(content) {
  document.getElementById("greeting").innerText = content
}
