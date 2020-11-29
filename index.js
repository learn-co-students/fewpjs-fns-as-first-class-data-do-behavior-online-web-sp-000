document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(response) {
if(parseInt(response) < 12) {
  //parseInt used to take in a string but retur a Intager 
  return 'Good Morning';
  // return the String value of Good Morin
}
  
else if(parseInt(response) > 12 && parseInt(response) < 17 ) {
  return  'Good Afternoon';
}
  
else { 
  return 'Good Evening';
  }
}
function displayMessage(response) {
  document.getElementById('greeting').innerText = response;
}
