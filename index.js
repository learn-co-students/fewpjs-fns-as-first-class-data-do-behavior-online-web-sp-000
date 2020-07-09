/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(string) {
  if (string.split(':')[0] > 17 ) {
    return 'Good Evening';
  } else if (string.split(':')[0] < 17 && string.split(':')[0] >= 12) {
    return 'Good Afternoon';
  } else {
    return 'Good Morning';
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(string) {
  document.querySelector('#greeting').innerText = string;
}