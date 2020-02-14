/* Given Code, don't edit */

function handleClick(e) {
	const timeString = document.getElementById("time").value;
	displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
	time = timeString.split(":");
	// parseInt('time', (12))

	if (time[0] < 12) {
		return `Good Morning`;
	} else if (time[0] >= 12 && time[0] <= 17) {
		return `Good Afternoon`;
	} else {
		return `Good Evening`;
	}
}
/* Write your implementation of displayMessage() */
function displayMessage(text) {
    document.getElementById("greeting").innerText = text;
	}