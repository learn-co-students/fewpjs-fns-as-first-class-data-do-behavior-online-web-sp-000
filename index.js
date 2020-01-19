/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(input) {
  let wordArray = input.split(':');
  let num = parseInt(wordArray[0]);
  let greeting = null;
  if (num < 12) {
    greeting = 'Good Morning';
  }
  else if (num >= 12 && num <= 17) {
    greeting = 'Good Afternoon';
  }
  else {
    greeting = 'Good Evening';
  }
  return greeting;
}

function displayMessage(input) {
  document.getElementById("greeting").innerHTML = "${input}";
}
