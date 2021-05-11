/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  time = parseInt(time.split(':')[0])

  if (time < 12) {
    return "Good Morning"
  }
  if (time > 12 && time < 17) {
    return "Good Afternoon"
  }
  if (time > 5) {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(message = "something") {
  let item = document.querySelector("h1#greeting")
  item.innerText = message
}
