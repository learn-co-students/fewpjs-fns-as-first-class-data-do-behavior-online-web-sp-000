/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  const descriptor = parseInt(time.split(":")[0]);
  
  if (descriptor < 12) {
    return "Good Morning";
  } else if (descriptor >= 12 && descriptor < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(message) {
  let element = document.getElementById('greeting');
  element.innerText = message;
}
