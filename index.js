/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(time) {
  let tod = parseInt(time.split(":")[0] + time.split(":")[1]);

  if (tod < 1200) {
    return "Good Morning";
  }

  else if (tod > 1700) {
    return "Good Evening";  
  }

  else {
    return "Good Afternoon";
  }
}
/* Write your implementation of greet() */
function displayMessage(greeting) {
  let words = document.getElementById("greeting")
  words.innerText = greeting

}



/* Write your implementation of displayMessage() */
