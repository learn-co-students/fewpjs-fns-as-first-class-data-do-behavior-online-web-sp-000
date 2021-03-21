/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
/* Write your implementation of greet() */
function greet(time){
  const hours = time.split(":");
  const hours_int = parseInt(time, 10);
  if (hours_int < 12) {
    return "Good Morning";
  }
  else if (hours_int <= 17){
    return "Good Afternoon"
  }
  else{
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(text){
  let greeting = document.getElementById("greeting")
  greeting.innerHTML = text;
}


