/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString) {
  let currentTime = timeString.split(':');
  let strippedTime = parseInt(currentTime, [0])

   if (strippedTime < 12){
    return `Good Morning`;
  }
   if (strippedTime > 12 && strippedTime < 17) {
     return `Good Afternoon`;
   }
   if (strippedTime > 17) {
     return `Good Evening`;
  }

}

function displayMessage(content) {
  document.querySelector('#greeting').innerText = `${content}`

}
/* Write your implementation of displayMessage() */
