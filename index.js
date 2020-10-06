/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time){
  let times = time.split(':')
  let tod = parseInt(times[0], 10)
  let returnMessage = ""

  if (tod < 12){
    returnMessage = "Good Morning"
  }
  else if (tod > 17){
    returnMessage = "Good Evening"
  }
  else{
    returnMessage = "Good Afternoon"
  }
  return returnMessage
}

function displayMessage(message){
  let messageArea = document.getElementById("greeting")
  messageArea.innerText = message
}

displayMessage("TEST")

