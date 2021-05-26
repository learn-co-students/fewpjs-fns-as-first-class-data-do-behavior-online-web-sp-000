/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  let time = timeString.split(':').join("")
  let message;
    if (time < 1200) {
      message = 'Good Morning';
    }
    if (1200 < time && time < 1700) {
      message = 'Good Afternoon';
    }
    if (time > 1700) {
      message = 'Good Evening';
    }

  return message
}
/* Write your implementation of displayMessage() */

function displayMessage(message) {
  document.getElementById("greeting").innerText = `${message}`;
} 