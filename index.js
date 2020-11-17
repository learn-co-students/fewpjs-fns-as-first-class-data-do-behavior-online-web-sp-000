/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString){
  let nowTime = timeString.split(':');
  let nowHour = parseInt(nowTime[0]);
  if (nowHour<12){
    return "Good Morning";
  } else if (nowHour>17){
    return "Good Evening";
  }
  else {
    return "Good Afternoon";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}