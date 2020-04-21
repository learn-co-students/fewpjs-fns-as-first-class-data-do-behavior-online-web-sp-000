/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet( time ) {
  let hour = time.split( ':' )
  hour = parseInt( hour, 10 )

  let greeting = "Good Evening"

  if ( hour < 12 )
    greeting = "Good Morning"
  else if ( hour < 17 )
    greeting = "Good Afternoon"

  return greeting
}

function displayMessage( greeting ) {
  document.querySelector("#greeting").innerText = greeting
}


/* Write your implementation of displayMessage() */
