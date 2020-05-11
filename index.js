/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  const hours = parseInt(timeString, 0);
  if (hours < 12) return "Good Morning";
  if (hours > 17) return "Good Evening";
  return "Good Afternoon";
}
/* Write your implementation of displayMessage() */

function displayMessage(greet){
  document.getElementById("greeting").innerText = greet;
  
}
