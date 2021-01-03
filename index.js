/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(string) {
  let number = parseInt((string.split(":"))[0]);
  if (number < 12) {
    return "Good Morning";
  } else if ( number > 12 && number < 17) {
    return "Good Afternoon"
  } else if ( number > 17) {
    return "Good Evening"
  };
};
function displayMessage(string){
  document.getElementById('greeting').innerText = string
};