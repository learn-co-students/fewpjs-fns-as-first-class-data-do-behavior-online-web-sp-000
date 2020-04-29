/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time_string){
  let new_time = time_string.split(":")
  let time_number_a = parseInt(new_time[0], 10)
    if (time_number_a < 12) {
      let argument = "Good Morning";
      return argument;
    } else if (time_number_a >= 12 && time_number_a <= 17) {
      let argument = "Good Afternoon";
      return argument;
    } else if (time_number_a > 17) {
      let argument = "Good Evening";
      return argument;
    }
}

/* Write your implementation of displayMessage() */
function displayMessage(argument) {
  let message = document.getElementById('greeting');
  message.innerText = `${argument}`;
}
