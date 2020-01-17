/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(string){
  const time = parseInt(string)
  if (time < 12){
    return 'Good Morning'
  }
  else if (time > 12 && time < 17) { 
    return 'Good Afternoon' 
  }
  else if (time > 17){
    return 'Good Evening'
  }

}

greet()

/* Write your implementation of displayMessage() */

function displayMessage(string){
 const update = document.getElementById('greeting')
 update.innerText = string  
}