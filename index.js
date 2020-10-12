/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  const timeArr = time.split(':');
  const hour = parseInt(timeArr[0]);
  const min = parseInt(timeArr[1]);
  const timeInt = hour + min / 60; 
  console.log(time); 
  console.log(timeArr);
  console.log(hour);
  console.log(min);
  console.log(timeInt); 
  if (timeInt < 12) {
    return 'Good Morning';
  }
  else if (timeInt < 17) {
    return 'Good Afternoon';
  }
  else {
    return 'Good Evening'
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(message) {
  const greeting = document.getElementById('greeting');
  greeting.innerText = message; 
}
