/* Given Code, don't edit */

document.querySelector('button').addEventListener('click', handleClick)

function handleClick (e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here... */

/* Write your implementation of greet() */
const greet = str => {
  const hour = parseInt(str.split(':')[0])
  if (hour < 12) {
    return 'Good Morning'
  } else if (hour < 17) {
    return 'Good Afternoon'
  } else {
    return 'Good Evening'
  }
}

/* Write your implementation of displayMessage() */
const displayMessage = str => {
  document.getElementById('greeting').innerText = str
}
