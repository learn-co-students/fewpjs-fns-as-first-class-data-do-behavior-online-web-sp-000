/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){
  let currentHour = parseInt(timeString.split(':')[0], 10);
  if(currentHour < 12){
    return "Good Morning";
  } else if(currentHour < 17){
    return "Good Afternoon"
  } else if (currentHour < 24){
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(message){
  document.getElementById('greeting').innerText = message;
}
