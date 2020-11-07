/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(givenTime){
  let theTime = givenTime.split(":").join("");
  let finalTime = parseInt(theTime, 10);
    if (givenTime == "") {
      return "TEST"
    }
    else if ((finalTime <= 1700) && (finalTime >= 1200)) {
      return "Good Afternoon";
    }
    else if (finalTime > 1700){
      return "Good Evening";
    }
    else if (finalTime < 1200){
      return "Good Morning";
    }
  }
/* Write your implementation of displayMessage() */
function displayMessage(string){
  greeting = document.getElementById('greeting')
  greeting.innerText = string
}
