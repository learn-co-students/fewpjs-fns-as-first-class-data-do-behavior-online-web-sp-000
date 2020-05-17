/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  const time = timeString.split(' ');
  if (parseInt(time[0]) < 12) {
    return 'Good Morning';
  }else if (parseInt(time[0]) > 12 && parseInt(time[0]) < 17 ) {
      return 'Good Afternoon';
    }else {
      return 'Good Evening'
    }
}

/* Write your implementation of displayMessage() */
function displayMessage(oneString) {
  document.querySelector("#greeting").innerText = oneString
  return
}
