/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value;
  displayMessage(greet(timeString));
}

function displayMessage(message) {
  // body...
  let element = document.getElementById("greeting");
  element.innerText = message;
}

function greet(time) {
  var hour = parseInt(time.split(':')[0], 10);
  var greeting = "";
  if (hour < 12){
    greeting =  "Good Morning";
  } else if (hour > 12 && hour < 17){
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening"
  }

  return greeting;
}






/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
