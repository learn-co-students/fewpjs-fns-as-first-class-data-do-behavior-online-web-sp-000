/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(num) {
  let hr=parseInt(num.split(':')[0]);
  let min=parseInt(num.split(':')[1]);
  if (hr<12)
    return "Good Morning";
  else if (hr>=12 && hr<=17) {
    return "Good Afternoon";
  }
  else if (hr>17) {
    return "Good Evening";
  }
}

function displayMessage(func) {
  document.getElementById("greeting").innerText=func;
}
