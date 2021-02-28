/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time) {
  if (parseInt(time) < 12) {
    return 'Good Morning'
  } else if (parseInt(time) >= 12 && parseInt(time) <= 17) {
    return 'Good Afternoon'
  } else {
    return 'Good Evening'
  }
}

function displayMessage(string) {
  const greeting = document.getElementById('greeting');
  greeting.innerText = string;
}