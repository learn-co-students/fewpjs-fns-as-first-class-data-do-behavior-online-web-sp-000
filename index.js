/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById("time").value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeStamp) {
  let times = timeStamp.split(":");
  if (times[0] < 12) {
    return "Good Morning";
  } else if (times[0] > 11 && times[0] < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(message) {
  const node = document.getElementById("greeting");
  node.innerText = message;
}
