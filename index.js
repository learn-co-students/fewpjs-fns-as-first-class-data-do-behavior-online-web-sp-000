/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString) {
  const hour = parseInt(timeString.split(":")[0]);
  if (hour >= 0 && hour < 12) {
    return "Good Morning";
  } else if  (hour >= 12 && hour < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

function displayMessage(greeting) {
  const messageNode = document.querySelector("h1#greeting");
  messageNode.innerText = greeting;
}
