/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
    const hour = parseInt(time, 10);
      var greeting1 = "Good Morning";
      var greeting2 = "Good Afternoon";
      var greeting3 = "Good Evening";
      if (hour < 12) return greeting1;
      if (hour < 17) return greeting2;
      return greeting3;
}


/* Write your implementation of displayMessage() */

function displayMessage(string) {
 document.getElementById("greeting").innerText = string;
 
  // on run, update text inside #greeting with (string) content 
}


// const input = document.getElementById('input');
// input.addEventListener('click', function(event) {
//   alert('I was clicked!');
// });