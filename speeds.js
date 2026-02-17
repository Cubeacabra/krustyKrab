/*const LOBSTER_JUMPSCARE = new Audio("lobsterSounds.mp3");

function playAudio() {
	LOBSTER_JUMPSCARE.play();
}

playAudio();
*/

let lobsters = document.querySelectorAll('img');
let currentSpeed = 6;

let speedUpButton = document.getElementById("speed");
let slowDownButton = document.getElementById("slow");


function speeed() {
	currentSpeed /= 2;
	for (let i = 0; i < lobsters.length; i++) {
		lobsters[i].style.animationDuration = currentSpeed + 's';
	} 
}
function slooow() {
	currentSpeed *= 2;
	for (let i = 0; i < lobsters.length; i++) {
		lobsters[i].style.animationDuration = currentSpeed + 's';
	} 
}

speedUpButton.addEventListener('click', speeed);
slowDownButton.addEventListener('click', slooow);


document.querySelector("body").addEventListener("mouseleave", (_) => {
  alert("YOU CANNOT ESCAPE THE LOBSTERS");
  window.open("https://bluelobster.netlify.app/", "_blank").focus();
});
