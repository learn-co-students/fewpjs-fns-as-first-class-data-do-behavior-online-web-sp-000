/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
  let d = parseInt(time.slice(0, 2));
  console.log(time + ' - ' + d);
  if (d < 12) {
    return 'Good Morning';
  } else if (d >= 12 && d < 17) {
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
  }
}

function displayMessage(m) {
  document.querySelector('#greeting').innerText = m;
}
