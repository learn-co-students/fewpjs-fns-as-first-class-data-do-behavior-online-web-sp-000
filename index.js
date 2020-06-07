/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function timeStringToTimeInt(timeString) {
  const splitStringArray = timeString.split(":")
  return parseInt(splitStringArray.join(""));
  
}

function greet(timeString) {
  const timeInt = timeStringToTimeInt(timeString);
  if (timeInt < 1200) {
    return "Good Morning";
  } else if (timeInt > 1200 && timeInt < 1700) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(htmlText) {
  let greetingElement = document.getElementById("greeting");
  greetingElement.innerText = htmlText;
}
