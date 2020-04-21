/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */


function greet(time) {
  let timeArray = time.split(":");
  let hours = parseInt(timeArray[0]);
  let minutes = parseInt(timeArray[1]);
  if (hours < 12) {
    return("Good Morning") ;   
  } else if (hours >= 12 && hours < 17) {
    return("Good Afternoon");
  } else {
    return("Good Evening")
  }
}

function displayMessage(string) {
  let element = document.getElementById("greeting");
  element.innerText = `${string}`;
}