/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  let hour = timeString.split(":")
  let time = parseInt(hour)
  if (time < 12) {
    return "Good Morning" 
  } else if (time > 17) {
    return "Good Evening" 
  } else {
    return "Good Afternoon"
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(string) {
  let display = document.querySelector('h1#greeting')
  display.innerText = string
}
