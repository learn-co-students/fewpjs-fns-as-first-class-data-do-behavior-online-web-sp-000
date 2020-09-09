/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  var splitTime = parseInt(time.split(':')[0])
  if (splitTime < 12){
    return "Good Morning"
  } if (splitTime > 12 && splitTime < 17){
    return "Good Afternoon"
  } if (splitTime > 17 && splitTime < 24){
    return "Good Evening"
  }
};

/* Write your implementation of displayMessage() */
function displayMessage(msg){
  document.getElementById("greeting").innerText = msg;
};
