/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time='00:00'){
  let hour = parseInt(time.split(':')[0])
  if(hour<12){
    return "Good Morning"
  }else if (hour>17) {
    return "Good Evening"
  }else{
    return "Good Afternoon"
  }
}

function displayMessage(text){
  const h1 = document.querySelector('h1#greeting')
  h1.innerText = text
}
