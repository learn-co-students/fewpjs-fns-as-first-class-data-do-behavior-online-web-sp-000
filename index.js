/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


function greet(timeString) {
  let greetMessage;
  time = parseInt(timeString);

  if(time < 12){
    greetMessage = "Good Morning";
  }
  else if(time > 17 && time <= 24) {
    greetMessage = "Good Evening";
  }
  else if(time >= 12 && time <= 17) {
    greetMessage = "Good Afternoon";
  }
  else {
    greetMessage = "TEST";
  }

  return greetMessage;
}

function displayMessage(message) {
    document.querySelector('#greeting').innerText = message;
}

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
