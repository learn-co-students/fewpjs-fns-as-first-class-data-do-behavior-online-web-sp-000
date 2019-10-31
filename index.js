/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(input){
  let split = input.split(":");
  let join = split.join("");
  let parse = parseInt(join);
  let time_greeting = "";
  if (parse < 1200 ){
    time_greeting =  "Good Morning";
  } else if (parse >= 1200 && parse <= 1700) {

    time_greeting = "Good Afternoon";
  } else {
    time_greeting = "Good Evening";
  }
  return time_greeting;
}
/* Write your implementation of displayMessage() */
function displayMessage(str){
  let element = document.getElementById("greeting");
  element.innerText = str;
}
