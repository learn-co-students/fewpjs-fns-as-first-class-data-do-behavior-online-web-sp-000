/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  const splitTime = time.split(":");
  const timeInt = parseInt(splitTime[0]);
  if (timeInt < 12) {
    return "Good Morning";
  } else if (timeInt > 17) {
    return "Good Evening";
  } else {
    return "Good Afternoon";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(text) {
  document.getElementById("greeting").innerText = text;
}
