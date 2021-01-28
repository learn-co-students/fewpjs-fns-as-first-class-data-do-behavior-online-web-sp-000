/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  let greeting;
  let hour = parseInt(timeString, 10);
  if (hour < 12)  {
    greeting = 'Good Morning';
  } else if (hour > 17) {
    greeting = 'Good Evening';
  } else if (hour > 12 && hour < 17) {
    greeting = 'Good Afternoon';
  } else {
    greeting = 'Please insert a string which specifies the 24-hour time in the format HH:MM';
  }
   return greeting
}
/* Write your implementation of displayMessage() */
function displayMessage(message) {
  document.getElementById('greeting').innerText = message;
}