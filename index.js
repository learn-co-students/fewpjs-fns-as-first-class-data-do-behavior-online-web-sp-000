/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */


function greet(timeString){
  let hourstr = timeString.split(":")[0]
  let hournum = parseInt(hourstr,10)
  if (hournum < 12){
    return "Good Morning"
  }else if(hournum > 17){
    return "Good Evening"
  }else{
    return "Good Afternoon"
  }
}

function displayMessage(msg){
   document.getElementById('greeting').innerText = msg
}