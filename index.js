/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */


function greet(string) {
let exactTime = string.split('')
let timeArray = exactTime.splice(0, 2)
let time = timeArray.join('');
let hour = parseInt(time, 10)
  if (hour < 12) {
    return "Good Morning";
  } else if (hour >= 12 && hour <= 17) { 
    return "Good Afternoon";
  } else if (hour > 17) {
    return "Good Evening";
  }
}

function displayMessage(string) {
  document.getElementById("greeting").innerText=string;
}

