/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet (timeString){
  timeString = timeString.split(':');
  timeString = timeString[0] + timeString[1];
  timeString = parseInt(timeString);
    if (timeString < 1200) {
      return "Good Morning";
    } else if (timeString >= 1200 && timeString <= 1700) {
      return "Good Afternoon";
    } else {
     return "Good Evening";
    }
};

function displayMessage(testContent){
  let content = document.getElementById('greeting').innerText = testContent;
};
