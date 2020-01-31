/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let integerTime = parseInt(time, 10)

  if (integerTime >= 0 && integerTime < 12) {
    return "Good Morning"
  } else if (integerTime > 17 && integerTime < 24) {
    return "Good Evening"
  } else {
    return "Good Afternoon"
  }

}

function displayMessage(content) {
  document.getElementById("greeting").innerText = content
}