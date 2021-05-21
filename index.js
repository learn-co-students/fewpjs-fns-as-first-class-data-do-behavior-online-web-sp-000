/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  const timeDigits = timeString.split(':');
  const timeNumber = parseInt(timeDigits[0]) * 100 + parseInt(timeDigits[1]);
  
  if (timeNumber >= 0 && timeNumber < 1200) {
    return 'Good Morning'
  } else if (timeNumber >= 1200 && timeNumber <= 1700) {
    return 'Good Afternoon'
  } else {
    return 'Good Evening'
  } 
}

/* Write your implementation of displayMessage() */
function displayMessage(message) {
  document.getElementById('greeting').innerText = message;
}
