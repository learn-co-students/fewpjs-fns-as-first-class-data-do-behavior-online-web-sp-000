/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(str) {
  let hour = str.split(':');
  let parsedHour = parseInt(hour);
  if (parsedHour < 12) {
    return "Good Morning";
  } 
  if (parsedHour < 17) {
    return "Good Afternoon";
  }
  return "Good Evening"
}
/* Write your implementation of displayMessage() */
function displayMessage(str) {
  document.getElementById("greeting").innerText = str;
}