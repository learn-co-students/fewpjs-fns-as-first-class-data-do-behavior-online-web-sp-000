/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

greet(){
  if (time < 12pm){
    console.log("Good Morning")
  } else if ( 12pm > time < 5pm) {
    console.log("Good Afternoon")
  } else {
    console.log("Good Evening")
  }
}

displayMessage(){

}