/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
   
}

/* End Given Code, don't edit above here...*/



function greet(hour){
  let time= parseInt(hour)
  
    if (time>18){
     return "Good Evening" ;
   } else if(time>12){
      return "Good Afternoon";
   } else if (time > 0) {
     return  "Good Morning" ;
   }
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
	let el =document.getElementById('greeting');
	el.innerText = string;

}