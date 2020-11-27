/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeStr) {
  const currentTime = parseInt(timeStr);
  if (currentTime < 12)
    return "Good Morning"
  if (currentTime > 17)
    return "Good Evening"
  else 
    return "Good Afternoon"
}

/* Write your implementation of displayMessage() */
function displayMessage (str) {
  document.getElementById('greeting').innerText = str;
}