/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */



function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}


function greet (timeStr){

  const hour = parseInt(timeStr);
    if ( hour < 12) return "Good Morning"
    if ( hour > 17) return "Good Evening"
    return "Good Afternoon"

// if x < 12
//   return "Good Morning"
//   ifelse 12 < x < 5
//   else
//   "Good Evening"
//
}
