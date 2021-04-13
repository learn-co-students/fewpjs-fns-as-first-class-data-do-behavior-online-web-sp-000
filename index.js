/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString) { 
  let string_numbers = timeString.split(':');
  console.log(string_numbers);
  let integer_one = parseInt(string_numbers[0], 10);
  let integer_two = parseInt(string_numbers[1], 10);
  let integer_time = integer_one + ":" + integer_two;
  if integer_time < "12:00" {
  return "Good Morning";
  }
  if integer_time > "12:00" < "17:00" { 
    return "Good Afternoon";
  }

}

function displayMessage(greet(timeString)) {
 document.querySelector("#greeting").textContent = greet(timeString);
}

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
