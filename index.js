/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
// function greet(timeString) {
//   if (timeString <= "12:00") {
//     return "Good Morning"
//   } else if (timeString > "12:00" && timeString < "17:00") {
//     return "Good Afternoon"
//   } else {
//     return "Good Evening"
//   }
// }
//
function greet(time) {
  const hour = parseInt(time,10)
  if (hour < 12) {
    return "Good Morning"
  } else if (hour > 17) {
    return "Good Evening"
  } else {
    return "Good Afternoon"
  }
}


/* Write your implementation of displayMessage() */
function displayMessage(greeting) {
  document.getElementById("greeting").innerText = greeting
}
