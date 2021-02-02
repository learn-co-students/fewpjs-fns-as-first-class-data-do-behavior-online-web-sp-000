/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time)
{
  var time_array = time.split(":")
  var hour = parseInt(time_array[0])
  console.log(hour)
  if (hour < 12)
  {
    return "Good Morning"
  }
  else if (hour < 17)
  {
    return "Good Afternoon"
  }
  else
  {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(inputText)
{
  var test = document.getElementById('greeting')
  test.innerText = inputText
  console.log(test.innerText)
}
