/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(userTime) {
  let hoursString = userTime.split(":")[0]
  let hours = parseInt(hoursString)

  if (hours < 12) {
    return "Good Morning"
  } 
  else if (hours >= 12 && hours <= 17 ) {
    return "Good Afternoon"
  }
  else {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  let element = document.getElementById("greeting")
  element.innerText = string
  return element
}