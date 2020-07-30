/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
  let splitStr = string.split(':');
  let time = splitStr[0];
  let parsedTime = parseInt(time, 10);
  if (parsedTime < 12)
    return "Good Morning";
  else if (parsedTime > 17)
    return "Good Evening";
  else
    return "Good Afternoon";
};
/* Write your implementation of displayMessage() */
function displayMessage(greeting) {
  document.getElementById("greeting").innerText = greeting;
};
