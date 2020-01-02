/* Given Code, don't edit */

function handleClick(e) { // called when a user clicks a link or button - the 
  // e can be called anything
 // debugger
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

  function greet(time)
  {
    let parsedTime = parseInt(time);

    if (parsedTime < 12)
    {
      return "Good Morning"
    }
    else if (parsedTime > 12 && parsedTime <= 17)
    {
      return "Good Afternoon"
    }
    else if (parsedTime > 17)
    {
      return "Good Evening"
    }
    else
    {
      return "Invalid Time"
    }
  }

/* Write your implementation of displayMessage() */
  function displayMessage(message)
  {
      // let greeting = greet(time); 
      // // console.log(greeting);
      // document.getElementsByTagName('h1').append
         // debugger // simliar to binding.pry
      // document.getElementsByTagName('h1')[0].textContent = message;
         document.getElementsByTagName('h1')[0].innerText = message;
  }

 
