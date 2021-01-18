/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function displayMessage(message) {
  document.getElementById("greeting").innerText = message;
}
/* Write your implementation of displayMessage() */

function greet(timeVar){
  if ( parseInt(timeVar, 10) < 12 ) return "Good Morning"
  if ( parseInt(timeVar, 10) > 17 ) return "Good Evening"
  return "Good Afternoon"
}