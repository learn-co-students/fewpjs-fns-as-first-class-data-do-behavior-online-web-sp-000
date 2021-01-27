/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  const converted = parseInt(time.split(':')[0],10);
  if (converted < 12) return 'Good Morning';
if (converted > 17) return 'Good Evening';
return 'Good Afternoon'

}

const result = greet(time);
console.log(result);
/* Write your implementation of displayMessage() */

function displayMessage(string) {
  document.getElementById("greeting").innerText = string;
}