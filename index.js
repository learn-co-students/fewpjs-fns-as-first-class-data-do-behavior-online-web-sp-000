/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  const timeSplit = time.split(':')
  const hour = parseInt(timeSplit[0])

  if (hour < 12){
    return "Good Morning"
  } else if (hour > 17){
    return "Good Evening"
  } else {
    return "Good Afternoon"
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(s) {
  document.getElementById("greeting").innerText = s;
}
