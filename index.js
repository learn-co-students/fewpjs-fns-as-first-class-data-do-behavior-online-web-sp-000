/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  time = parseInt(time.replace(':', ''))
  if (time < 1200) {
    return 'Good Morning'
  } else if (time < 1700) {
    return 'Good Afternoon'
  } else {
    return 'Good Evening'
  }

}

/* Write your implementation of displayMessage() */
function displayMessage(message) {
  document.getElementById('greeting').innerText = message
}