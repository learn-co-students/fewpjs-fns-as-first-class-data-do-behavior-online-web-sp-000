/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(string) {
  let newTime = parseInt(string.split())
    if (newTime < 12) {
      return "Good Morning"
    } else if (newTime > 17) {
      return "Good Evening"
    } else {
      return "Good Afternoon"
    };
}

function displayMessage(saying) {
  document.getElementById('greeting').innerText = saying;
}



/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
