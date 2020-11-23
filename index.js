/* Given Code, don't edit */

const { Test } = require("mocha");

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  let time = timeString.slice(0,2) + timeString.slice(3);
  time = parseInt(time, 10);
  if (time < 1200) {
    return 'Good Morning';
  } else if ((time >= 1200) && (time <= 1700)) {
    return 'Good Afternoon';
  } else if (time > 1700 ) {
    return 'Good Evening';
  } else {
    return 'TEST';
  };
}
/* Write your implementation of displayMessage() */

function displayMessage(timeString) {
  let daShit = document.getElementById("greeting");
  daShit.innerText = greet(timeString);
  
}

