/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(time) {
  let timeArray = time.split(":");
  for (let x = 0; x < timeArray.length; x++) {
    timeArray[x] = parseInt(timeArray[x]);
  };
  let i = timeArray[0];
  if (i < 12) {
      return("Good Morning");
  } else if (i >= 12 && i < 17) {
      return("Good Afternoon");
  } else {
      return ("Good Evening");
  };
};
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function displayMessage(message) {
   let element = document.getElementById("greeting");
     element.innerText = message;
};
