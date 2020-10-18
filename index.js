/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(timeString) {
  let num = timeString.split("00")[0];
  let time = parseInt(num, 10);
  if (time < 12) return "Good Morning";
  if (time > 17) return "Good Evening";
  return "Good Afternoon"
}

function displayMessage(message) {
  document.getElementById("greeting").innerText = message;
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */