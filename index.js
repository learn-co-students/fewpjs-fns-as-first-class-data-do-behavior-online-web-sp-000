/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let message = time; 
  let hour = parseInt(time.substring(0,2));
  if (hour < 12) {
  message = "Good Morning";
  } else if (hour > 12 && hour < 17) {
    message = "Good Afternoon";
  } else if (hour > 17 && hour <25) {
    message = "Good Evening";
  }
  return message; 
}
/* Write your implementation of displayMessage() */

function displayMessage(string) {
  let greeting = document.getElementById('greeting');
  greeting.innerText = string;
}
