/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string){
  const split = string.split(':');
  const hh = parseInt(split[0]);
  const mm = parseInt(split[1]);
  if (hh >= 0 && hh < 12) {
    return 'Good Morning'
  } else if (hh >= 12 && hh <= 17) {
    return 'Good Afternoon'
  } else if (hh > 17 && hh < 24) {
    return 'Good Evening'
  } else {
    alert('An error occurred.')
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(string) {
  let el = document.getElementById('greeting')
  el.innerText = string;
}