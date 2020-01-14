/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet (timeString) {
  let timeArray = timeString.split(":");
  let timeI = parseInt(timeArray[0]);
  if (timeI < 12) {
    return "Good Morning";
  } else if (timeI <= 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

function displayMessage(str) {
  document.getElementById("greeting").innerText = str;
}