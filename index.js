/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
   const timeString = document.getElementById('time').value
   displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
   const hour = time.split(':');
   if (hour[0] < 12) {
      return `Good Morning`;
   }
   if (hour[0] >= 12 && hour[0] <= 17) {
      return `Good Afternoon`;
   }
   if (hour[0] > 17) {
      return `Good Evening`;
   }
}

/* Write your implementation of displayMessage() */

function displayMessage(content) {
   document.getElementById("greeting").innerText = content;
}