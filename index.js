/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  const intTime = parseInt(time.split(":"))
  if (intTime < 12) {
    return "Good Morning"
  }
  else if (intTime > 11 && intTime < 17) {
    return "Good Afternoon"
  }
  else
    return "Good Evening"
}

/* Write your implementation of displayMessage() */

function displayMessage(string) {
  const node = document.getElementById("greeting")
  node.innerText = string
}
