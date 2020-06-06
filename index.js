/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(string) {
  let time = string.split(":");
  let hour = time[0];
  let value = parseInt(hour, 10);


  if (value < 12) {
    return `Good Morning`;
  }
  else if (value >= 12 && value < 17) {
    return `Good Afternoon`;
  }
  else {
    return `Good Evening`;
  }

}

/* Write your implementation of displayMessage() */
function displayMessage(string) {
  let message = document.getElementById("greeting"); // First, we create a variable and set it equal to our 'h1' element with an 'id' of greeting.
  message.innerText = string; // Second, we take this variable and use the 'innerText' command to change the element's text to the string submitted in the argument.
  return message // Finally, we return the message. This will display the result of our 'greet' function through the 'handleClick' function.
}
