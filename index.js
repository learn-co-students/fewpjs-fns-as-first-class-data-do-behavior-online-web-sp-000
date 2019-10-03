/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let hourString = time.split(":")[0]
  let hour = parseInt(hourString)
  if (hour < 12) {
    return "Good Morning";
  }
  else if (hour < 17) {
    return "Good Afternoon";
  }
  else {
    return "Good Evening";
  }

}
/* Write your implementation of displayMessage() */
function displayMessage(text) {
  var greeting = document.getElementById("greeting");
  greeting.innerText = text
}
