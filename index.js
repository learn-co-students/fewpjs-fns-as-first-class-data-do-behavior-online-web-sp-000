/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  const hour = timeString.split(':');
  console.log(hour);
  const parsed = parseInt(hour, 10);
  console.log(parsed);
  if (parsed < 12) {
    return "Good Morning";
  } else if (parsed > 11 && parsed < 16) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(string) {
  let h = document.getElementById('greeting');
  h.innerText = string;
}