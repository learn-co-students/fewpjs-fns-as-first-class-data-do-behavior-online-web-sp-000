/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString){
  const time = timeString.split(':');
  const hh = parseInt((time[0]), 10);
  const mm = parseInt((time[1]), 10);
  if (hh == NaN || mm == NaN) {
    return 'Invalid Time, must be in HH:MM 24 hour format'
  };
  if (hh <12) {
    return "Good Morning"
  };
  if (hh >12 && hh <17) {
    return "Good Afternoon"
  };
  return "Good Evening"
}

/* Write your implementation of displayMessage() */

function displayMessage(message){
  document.getElementById('greeting').innerText = message}
