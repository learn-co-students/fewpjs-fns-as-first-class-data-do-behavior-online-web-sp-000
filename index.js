/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet (string) {
  const time = string.split(':');
  let hour = parseInt(time[0], 10);
  let mins = parseInt(time[1], 10);
  if (hour < 12) {
    return 'Good Morning'
  } else if (hour <= 16 ) {
    return 'Good Afternoon'
  } else {
    return 'Good Evening'
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  document.getElementById('greeting').innerText = string
}
