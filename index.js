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
    if (hour[0] >= 0 && hour[0] < 12) {
      return "Good Morning"
    } else if (hour[0] > 12 && hour[0] < 17) {
    return "Good Afternoon"
    } else if (hour[0] > 17 && hour[0] <= 23) {
    return "Good Evening"
    } else {
      return "Invalid Entry"
    }
}

/* Write your implementation of displayMessage() */
function displayMessage(msgString) {
  document.getElementById('greeting').innerText = msgString;
}