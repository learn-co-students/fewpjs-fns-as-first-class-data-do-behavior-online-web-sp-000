/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(the_time) {
let this_time = the_time.split(":");
let another_time = this_time[0].concat(this_time[1])
let the_result = parseInt(another_time, 10)

if (the_result < 1200) {
  return "Good Morning";}
if ((the_result >=1200) && (the_result<= 1700)) {
  return "Good Afternoon";}
else if (the_result > 1700) {
  return "Good Evening";
}
else {
  return "Test"
}

}

function displayMessage(testContent) {
  let string = testContent
  document.getElementById("greeting").innerText = string
}

 
/* Write your implementation of displayMessage() */
