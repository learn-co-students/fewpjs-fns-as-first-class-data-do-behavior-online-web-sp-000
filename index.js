/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* takes in arguement of string, which specifies time in HH:MM */

function greet(time) {
  let newTime = time.split(":");
  let hourS = newTime[0];
  let hourI = parseInt(hourS)

  if (hourI < 12) {
    greeting = "Good Morning";
  } else if (hourI > 12 && hourI < 17) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return greeting;
}

/* Write your implementation of displayMessage() */
function displayMessage(greeting) {
  let element = document.getElementById("greeting");
  element.innerText = greeting;
}