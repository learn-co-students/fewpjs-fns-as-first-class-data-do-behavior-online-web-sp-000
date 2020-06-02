/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let newArr = time.split(":");
  newArr.splice(newArr.length - 1, 0, '.');
  let newString = newArr.join("");
  let newTime = parseInt(newString, 10);

  if(newTime <= 12) {
    return "Good Morning";
  } else if (newTime >= 12 && newTime <= 15) {
    return 'Good Afternoon';
  } else if (newTime > 15){
    return 'Good Evening';
  }
}


/* Write your implementation of displayMessage() */
function displayMessage(message) {
  let element = document.getElementById('greeting');
  element.innerText = message
}
