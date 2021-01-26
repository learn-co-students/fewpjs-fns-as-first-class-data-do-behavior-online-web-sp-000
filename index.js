document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(string) {
  const time = parseInt(string, 10)
  if (time < 12) 
    return `Good Morning`;
  if (time > 17)
    return `Good Evening`;
  return `Good Afternoon`;
}

function displayMessage(string) {
  document.getElementById('greeting').innerText = string
}