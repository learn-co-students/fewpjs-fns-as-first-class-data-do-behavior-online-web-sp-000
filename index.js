/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeMsg) {
    let time = timeMsg.split( ':');
    let timeNew = parseInt(time, 10);

    if (timeNew < 12) {
        return "Good Morning" 
    }
        else if (timeNew > 17) {
        return "Good Evening"
        }
        else {
        return "Good Afternoon"
        }
    }

/* Write your implementation of displayMessage() */
function displayMessage(greeting) {
    document.getElementById('greeting').innerText = greeting;
}
