/* Given Code, don't edit*/

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(timeS) {
  let time = timeS.split('');
  
  time.splice(2, 1);
  let ti = time.join('');
  let newtime = parseInt(ti, 10);
  let greeting;
  if (newtime < 1200) {
    greeting = "Good Morning";
  } else if (newtime > 1200 & newtime < 1700){
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }
  return greeting;
}

function displayMessage(string){
  let g = document.getElementById("greeting");
  g.innerText = string;
  
} 

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */