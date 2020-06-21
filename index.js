/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeStr) {
  /* It would be a good idea to make sure hour isn't less than 0 or greater
   * than 24...perhaps "throwing an Error" if one of these impossible cases
   * happens.
   *
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Throwing_a_generic_error
   *
   */
  // The split() method divides a String into an ordered set of substrings, puts these substrings into an array, and returns the array.  
  // The parseInt() function parses a string argument and returns an integer of the specified radix 
//  radix  - An integer between 2 and 36
// Or NaN when - the radix is smaller than 2 or bigger than 36, or the first non-whitespace character cannot be converted to a number.
  // The parseInt function converts its first argument to a string, parses that string, then returns an integer or NaN.

const hour = parseInt(timeStr, 10);
  if ( hour < 12) return "Good Morning"
  if ( hour > 17) return "Good Evening"
  return "Good Afternoon"
}

/* Write your implementation of displayMessage() */
function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}
