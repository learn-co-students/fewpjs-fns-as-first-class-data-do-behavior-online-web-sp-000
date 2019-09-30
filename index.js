/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {

  const time = parseInt(string.split(':')[0])
  if (time < 12) {
    return "Good Morning"
  } else if (time < 17) {
    return "Good Afternoon"
  }
  return "Good Evening"
}

function displayMessage(string) {
  const el = document.getElementById('greeting')
  el.innerText = string
}

/* Write your implementation of displayMessage() */
