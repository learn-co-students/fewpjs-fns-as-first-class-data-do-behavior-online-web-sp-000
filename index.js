/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {

  let the_time = time.split(":")
  let hours = parseFloat(the_time[0])

 

  if(hours < 12) {
    return "Good Morning"
  }

  else if (hours >= 12 && hours <= 17) {
		return "Good Afternoon"
  }

  else if (hours > 17) {
    return "Good Evening"
  }

  else {
    return "Incorrect format"
  }
}


function displayMessage(string) {
	document.querySelector("#greeting").innerText = string
	return
}

