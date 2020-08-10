/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) { 
  let result; 
  const splitTime = time.split(":");
  let hour = splitTime[0];
  let minute = splitTime[1];
  let intHour = parseInt(hour);
  if (intHour < 12) { 
    result = "Good Morning"; 
  } else if (intHour >= 12 && intHour < 17) { 
    result = "Good Afternoon";
  } else { 
    result = "Good Evening";
  }
  return result;
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  let el = document.getElementById("greeting")
  el.innerText = string;
}
