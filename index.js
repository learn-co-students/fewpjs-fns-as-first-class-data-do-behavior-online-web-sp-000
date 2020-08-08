/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
  let str = string.split(':');
  let time = str[0];
  let formattedTime = parseInt(time, 10);
  if (formattedTime < 12)
    return "Good Morning";
  else if (formattedTime > 17)
    return "Good Evening";
  else 
    return "Good Afternoon";
};
/* Write your implementation of displayMessage() */
function displayMessage(greeting) {
  document.getElementById("greeting").innerText = greeting;
};
