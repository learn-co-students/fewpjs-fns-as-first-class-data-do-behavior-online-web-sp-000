/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  const hourStr = time.split(':')[0];
  const hourInt = parseInt(hourStr);
  if (hourInt < 12) {
    return "Good Morning"
  }
  else if (hourInt >= 12 && hourInt <= 17) {
    return "Good Afternoon"
  }
  else {
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(message) {
  const greeting = document.getElementById("greeting");
  greeting.innerText = message;
}