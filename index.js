/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString) { 
  let string_numbers = timeString.split(':');
  let integer_hour = parseInt(string_numbers[0], 10);
  if (integer_hour < 12) {
  return `Good Morning`;
  }
  else if (integer_hour > 12 && integer_hour < 17) { 
  return `Good Afternoon`;
  }
  else if (integer_hour > 17) {
  return `Good Evening`;
  }
}

function displayMessage(string) {
 document.querySelector("#greeting").innerText = string;
}

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
