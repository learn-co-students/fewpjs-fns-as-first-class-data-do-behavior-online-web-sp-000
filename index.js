/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string){
  let strings = string.split(":");
  let hours = strings[0];
  let minutes = strings[1];
  if (hours < 12){
    return "Good Morning";
  } else if (hours >= 12 && hours < 16){
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(string){
  
  console.log(string);
  
  let location = document.getElementById('greeting');
  location.innerText = string;
}
