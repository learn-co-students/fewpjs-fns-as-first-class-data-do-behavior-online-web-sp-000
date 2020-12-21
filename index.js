/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){
  const hourFromString = parseInt(timeString, 10);
  if (hourFromString < 12) return "Good Morning"
  if (hourFromString < 17) return "Good Afternoon"
  return "Good Evening"
}

/* Write your implementation of displayMessage() */
function displayMessage(message){
  document.getElementById('greeting').innerText = message;
}