/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */


  /* Takes one argument*/
function greet(str){
  /* converts the string from <input> into the 24 hour format*/
  let hour = str.split(':')[0];
  if (hour < 12) return "Good Morning";
  if (hour > 17) return "Good Evening";
  return "Good Afternoon";
}
/* Write your implementation of displayMessage() */
  /* Takes one argument */
function displayMessage(str){
  /* Updates the text inside the #greeting node with the content of the argument*/
  document.getElementById('greeting').innerText = str;
  /* Does not return anything*/
}

