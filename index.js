/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
const greet = (timeString) => {
    const hour = parseInt(timeString, 10)
    if (hour < 11)
      return 'Good Morning'
    if (hour > 16 )
      return "Good Evening"
    else return "Good Afternoon"
  }
/* Write your implementation of displayMessage() */
function displayMessage(message) {
  document.getElementById("greeting").innerText = message;
}
