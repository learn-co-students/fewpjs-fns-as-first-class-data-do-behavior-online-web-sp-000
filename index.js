/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString){
  let hour = timeString.split(":")
  let hourInt = parseInt(hour[0])
  if (hourInt < 12) {
    return "Good Morning"
  } else if (hourInt >= 12 && hourInt <= 16) {
    return "Good Afternoon"
  } else if (hourInt >= 17) {
    return "Good Evening"
  }

}
/* Write your implementation of displayMessage() */
function displayMessage(timeOfDay) {
  document.querySelector("#greeting").innerText = timeOfDay
}
