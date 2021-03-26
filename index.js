/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
let nums = time.split(":");
// let num = nums.join();
let numm = parseInt(nums[0], 10);

if (numm < 12) {
  greeting = "Good Morning";
}
else if (numm >= 12 && numm <=17) {
  greeting = "Good Afternoon";
}
else if (numm > 17) {
  greeting = "Good Evening";
}
 return greeting;
}


function displayMessage(message) {
  let element = document.querySelector("h1#greeting");
  element.innerText = message;

}
