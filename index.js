/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let trueTime = parseInt(time, 10)
  if (trueTime[0] < 12) return `Good Morning`
  if (trueTime[0] > 17) return `Good Evening`
  return `Good Afternoon`
}
/* Write your implementation of displayMessage() */
