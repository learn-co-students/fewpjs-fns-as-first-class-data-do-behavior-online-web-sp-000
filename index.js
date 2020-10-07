/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/ 
/* Write your implementation of greet() */
function greet(timestring){
  let t=timestring.split('')
  t.splice(2, 1)
  let time=(parseInt(t.join('')))
  if (time<1200){
    return 'Good Morning'
  }
  if (time > 1201 && time< 1700){
    return 'Good Afternoon' 
  }
  if (time > 1701){
    return 'Good Evening'
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(message) {
  const element = document.getElementById("greeting")
  element.innerText = message
  return message
}