/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))

}

/* End Given Code, don't edit above here...*/



  function greet(hour) {
  // let hour = 10
  let time = parseInt(hour);

  if (time < 12)  return ("Good Morning");

  else if (time >= 12 && time < 17 ) return ("Good Afternoon");

  else return ("Good Evening")

  }


  // The `displayMessage` function should take one argument, a `String`.
  //
  // When the function runs it should update the text inside the `#greeting` node
  // with the content of the first argument.
  //
  // It does not return anything.

  function displayMessage(hour) {
     let message = document.getElementById("greeting")
     // search for an element with the type of ID #greeting
     // found node and set equal to message
     // node is element ( p tag , or href)
     message.innerText = hour
     // changing the inner HTML
    // updating the original message in greeting function
  }

 // if time > 12pm return good morning
 // if time is between 12Pm - 5pm return good afternoon
 // if time > 5pm return Good evening
// return "Good Morning"
/* greet Write your implementation of greet() */
/* Write your implementation of displayMessage() */
