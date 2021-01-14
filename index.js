/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function displayMessage(string){
  let greetElement = document.getElementById("greeting");
  greetElement.innerText = string;
};

function greet(timestr){
  let time = parseInt(timestr.split(":")[0]);
  if (time < 12){
    return "Good Morning"
  } else if (time >= 12 && time < 17){
    return  "Good Afternoon"
  } else if (time > 17) {
    return  "Good Evening"
  };
};
/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
