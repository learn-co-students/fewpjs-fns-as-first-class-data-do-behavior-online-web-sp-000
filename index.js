/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
  const time = string.split('\:').join('')
  const parsedTime = parseInt(time)
  if (parsedTime < 1200) {
    return "Good Morning";
  }
  else if  (parsedTime >=1200 && parsedTime <= 1700) {
    return "Good Afternoon";
  }
  else {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(msg) {
  document.getElementById('greeting').innerText = msg;
}
