/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time){
  let hour = time.slice(0,2);

  if (hour < 17) {
    return "Good Afternoon";
  } else if (hour >= 17) {
    return "Good Evening";
  } else {
    return "Good Morning";
  }

}

/*function displayMessage(){
  alert('TEST');
}
*/

function displayMessage(greeting) {
  let element = document.getElementById('greeting');
  element.innerText = greeting;
}
