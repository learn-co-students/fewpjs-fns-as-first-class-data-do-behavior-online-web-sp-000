/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){

  //change the string to an integer
  function changeToInteger(time) {
    let t = time.split("");
    t.splice(-3, 1);
    t = t.join("");
    let i = parseInt(t);
    return i;
  }

  const timeArg = changeToInteger(time)
  const noon = changeToInteger("12:00"); //1200
  const five = changeToInteger("17:00"); //1700

  if (timeArg < noon){
    return 'Good Morning'
  } else if (timeArg >= five){
    return 'Good Evening'
  } else if (noon < timeArg < five) {
    return 'Good Afternoon'
  }

}
/* Write your implementation of displayMessage() */
function displayMessage(msg){
  document.getElementById("greeting").innerText = msg;
}
