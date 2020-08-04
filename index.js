/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(string) {
  let splitted = string.split(":");
  let parsedString = parseInt(splitted[0]);
  if (parsedString < 12) {
    return "Good Morning";
  }
  if (parsedString >= 12 && parsedString < 17) {
    return "Good Afternoon";
  }
  if (parsedString >= 17) {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  document.getElementById("greeting").innerText = string;
}