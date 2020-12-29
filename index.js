/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time){
  var hour = parseInt(time);

  if(hour < 12){
    console.log('time', time)
    return "Good Morning"

  } else if(12 < hour && hour < 17){
    console.log('time', time)
    return "Good Afternoon"

  } else {
    console.log('time', time)
    return "Good Evening"
  }
}

function displayMessage(msg){
  let greeting = document.getElementById('greeting');
  greeting.innerText = msg;
  return greeting;
}