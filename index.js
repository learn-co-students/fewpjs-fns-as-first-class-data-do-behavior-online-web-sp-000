/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let timeString = time.split(":").join("");
  let timeNumber = parseInt(timeString, 10);
    if (time == "") {
      return "Invalid";
    }
    else if ((timeNumber <= 1700) && (timeNumber >= 1200)) {
      return "Good Afternoon";
    }
    else if (timeNumber > 1700){
      return "Good Evening";
    }
    else if (timeNumber < 1200){
      return "Good Morning";
    }
  }
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  greeting = document.getElementById("greeting");
  greeting.innerText = string;
}