/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById("time").value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time) {
  let newTime = parseInt(time, 10);
  if (newTime < 12) {
    return "Good Morning";
  } else if (newTime > 12 && newTime < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

function displayMessage(greet) {
  document.getElementById("greeting").innerText = greet;
}
