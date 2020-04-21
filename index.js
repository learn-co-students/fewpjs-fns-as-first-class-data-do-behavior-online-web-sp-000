/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
  let hour = parseInt(time);
  let greeting;
  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour > 17) {
    greeting = "Good Evening";
  } else {
    greeting = "Good Afternoon";
  }
  return greeting;
}

function displayMessage(message) {
  document.getElementById("greeting").innerText = message;
}

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
