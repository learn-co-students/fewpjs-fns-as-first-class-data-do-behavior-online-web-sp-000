/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(time) {
  time = time.split(':')
  let hour = parseInt(time[0])
  if (hour < 12) {
    return 'Good Morning';
   } else if (hour > 12 && hour < 17) {
    return 'Good Afternoon';
    } else {
    return 'Good Evening';
}
}

function displayMessage(word) {
 document.getElementById('greeting').innerText = word;
}
