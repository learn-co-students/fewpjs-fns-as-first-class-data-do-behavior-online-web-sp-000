/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  const numTime = parseInt(time, 10);
  if (numTime < 12) {
    return `Good Morning`;
  }
  if (numTime >= 12 && numTime < 17) {
    return `Good Afternoon`;
  }
  if (numTime >= 17) {
    return `Good Evening`;
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(message) {
  document.getElementById("greeting").innerText=message;
}
