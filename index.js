/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){

  const militaryTime = parseInt(timeString.split(":")[0]);
  
  if (militaryTime > 0 && militaryTime < 12) {
    return "Good Morning";
  } else if (militaryTime >= 12 && militaryTime <= 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}



/* Write your implementation of displayMessage() */
function displayMessage(message){
  document.getElementById('greeting').innerText = message;
}
