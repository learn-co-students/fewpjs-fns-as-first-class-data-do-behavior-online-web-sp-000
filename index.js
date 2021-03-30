/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/




function greet(time) {
  let digits = time.split(':').join('');
  // Split the time string at the :, join again, yes you need the '' in the function parentheses
  let miltime = parseInt(digits, 10);
  // Parse this number string (digits) into an integer of base 10 (second argument)
  if (miltime < 1201) {
    return "Good Morning"
  };

  if (1200 < miltime && miltime < 1701)  {
    return "Good Afternoon"
  };

  if (1700 < miltime && miltime < 2400) {
    return "Good Evening"
  }; 
}

function displayMessage(greeting) {
  let message = greeting;
  document.getElementById('greeting').innerText = `${message}`;
}
 