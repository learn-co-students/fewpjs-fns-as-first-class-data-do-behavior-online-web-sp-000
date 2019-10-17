/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
  let hour = time.split(':')
  hour = parseInt(hour, 10)
  if (hour < 12) {
    return 'Good Morning'
  } else if (hour <= 17) {
    return 'Good Afternoon'
  } else if (hour > 17) {
    return 'Good Evening'
  }
}
function displayMessage(message) {
  document.getElementById("greeting").innerText = message
}
