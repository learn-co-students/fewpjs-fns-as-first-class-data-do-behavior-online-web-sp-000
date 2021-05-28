/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let parts = time.split(':');
  let j = parts[0].concat(parts[1]);
  let f = parseInt(j, 10);

  if (f < 1200) {
    console.log(`hi`)
    return "Good Morning";
  }
 
  else if (f > 1700) {
    return "Good Evening";
  }

  else {
    return "Good Afternoon";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(str) {
  document.getElementById("greeting").innerText = str; 
}