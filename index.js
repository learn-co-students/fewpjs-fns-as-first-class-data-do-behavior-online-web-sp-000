document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value;
  displayMessage(greet(timeString));
}

function greet(time) {
  const input = time.split(':');
  const hour = parseInt(input[0], 10);
  const minute = parseInt(input[1], 10);
  const timeNum = hour + (minute / 100);
  if (timeNum < 12) { return 'Good Morning'; }
  if (timeNum >= 12 && hour <= 17) { return 'Good Afternoon'; }
  if (timeNum > 17) { return 'Good Evening'; }
}

function displayMessage(message) {
  document.querySelector('#greeting').innerText = message;
  // return message;
}
