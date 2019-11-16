/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
  let newTime = parseInt(time);
  if (newTime < 9) {
    return "Good Morning"
  }  else if (newTime < 15) {
      return "Good Afternoon"
   } else {
      return "Good Evening"
   }
  }

function displayMessage() {
  let content = document.getElementById("greeting")
  
  content.innerText = "TEST"
}