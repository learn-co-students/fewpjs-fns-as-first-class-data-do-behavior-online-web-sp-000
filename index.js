/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(string) 
{
  const time = parseInt((string.split(":").shift().toString()));
  if (time > 17) {
  return 'Good Evening'  
  } else if (time < 12 ) {
  return 'Good Morning'
  } else {
  return  'Good Afternoon'
  }
}



function displayMessage(string) {
  document.getElementById("greeting").innerText = string;
}
