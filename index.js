/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  // get hour from timestring
  const hour = timeString.split(":")[0];
  // return string based on time
  let timeOfDay = " ";
  if(hour <= 12) {
    timeOfDay += "Morning"
  } else if (hour <= 17) {
    timeOfDay += "Afternoon"
  } else {
    timeOfDay += "Evening"
  }
  return `Good${timeOfDay}`;
}
/* Write your implementation of displayMessage() */
function displayMessage(message) {
  document.querySelector("#greeting").innerText = message;

}
