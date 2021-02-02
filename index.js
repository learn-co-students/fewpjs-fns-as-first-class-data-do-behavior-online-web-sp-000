/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let hour = parseInt(time.split(':')[0], 10);
  let minute = parseInt(time.split(':')[1], 10);

  let msg ; //must define outside for scope access. otherwise it will create a varaible only availble inside that if environment

  if ( (hour < 12) ||  (hour == 12 && minute == 0) ) {
     msg = "Good Morning" ;
  } else {
    
     if ( (hour < 17) || (hour == 17 && minute == 0) ) { //pm and <5 pm
       msg = "Good Afternoon";
    } else  { //pm and > pm
       msg = "Good Evening" ;
    };

  };

   return msg;

};



/* Write your implementation of displayMessage() */

let greeting = document.getElementById("greeting");
function displayMessage(message) {
  greeting.innerText = message;
  //somehow innerHTML or textContent doesnt work.... wtf
}
