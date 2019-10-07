/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(input_time){
  let split_time = input_time.split(":");
  let join_time = split_time.join("");
  let parse_time = parseInt(join_time);
  let time_greeting = "";
  if (parse_time < 1200 ){
    time_greeting =  "Good Morning";
  } else if (parse_time >= 1200 && parse_time <= 1700) {
   
    time_greeting = "Good Afternoon";
  } else {
    time_greeting = "Good Evening";
  }
  return time_greeting;



}

/* Write your implementation of displayMessage() */
function displayMessage(string){
  let element = document.getElementById("greeting");
  element.innerHTML = string;

}