/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  let hour = timeString.split(":");
  hour = parseInt(hour);

  let greeting = ""
  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 17) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening"
  }
  return greeting;
}

/* Write your implementation of displayMessage() */
function displayMessage(greetingString) {
  let el = document.getElementById('greeting')
  el.innerText = greetingString
}
