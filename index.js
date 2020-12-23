/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* instead of parseInt(), one can use Number()*/

function greet(timeString) {
  let spl = timeString.split(" ");
  let convert = parseInt(spl);
  if (convert < 12) {
    return "Good Morning";
  } else if (convert >= 12 && convert < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}
function displayMessage(something) {
  document.getElementById("greeting").innerText = something;
}
