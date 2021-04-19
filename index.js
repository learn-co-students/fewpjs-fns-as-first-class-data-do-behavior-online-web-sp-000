/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  let num = parseInt(time, 10);
  if (num<12) {
    greeting = "Good Morning";
  }
  else if (num>12 && num <=17) {
    greeting = "Good Afternoon";
  }
  else if (num>17) {
    greeting = "Good Evening";
  }
  return greeting;
}

/* Write your implementation of displayMessage() */

function displayMessage(string) {
  let element = document.querySelector("h1#greeting");
  element.innerText = string;
}
