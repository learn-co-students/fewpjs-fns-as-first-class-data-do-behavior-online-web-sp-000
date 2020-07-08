/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
let time = '';

function greet() {
  if (time < 1200 ) {
    console.log('Good Morning')
  } else if (time <= 1700 ) {
    console.log('Good Afternoon')
  } else {
    console.log('Good Evening')
  }
}
/* Write your implementation of displayMessage() */
