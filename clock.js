//initalized
let seconds = 0;
let minutes = 0;
let hours = 0;

// time functions
function secondRotation(seconds) {
  let degRotation = 6 * seconds;
  return degRotation;
}

function minuteRotation(minutes, seconds) {
  let degRotation = 6 * minutes + (seconds * 6) / 60;
  return degRotation;
}

function hourRotation(hours, minutes) {
  let degRotation = (hours * 30) + ((minutes * 6) / 12);
  return degRotation;
}

//tick/counting function
function sayTick() {
  seconds++;

  if (seconds >= 60) {
    minutes++;
    seconds = 0;
  }

  if (minutes >= 60) {
    hours++;
    minutes = 0;
  }

  if (hours >= 12) {
    hours = 0;
  }

  console.log("tick");


  hourHand.style.transform = `rotate(` + hourRotation(hours, minutes) + `deg)`;
  minuteHand.style.transform = `rotate(` + minuteRotation(minutes, seconds)  + `deg)`;
  secondHand.style.transform = `rotate(` + secondRotation(seconds)  + `deg)`;
}


//DOM
document.addEventListener("DOMContentLoaded", function() {

  hourHand = document.querySelector('#hour');
  minuteHand = document.querySelector('#minute');
  secondHand = document.querySelector('#second');

  setInterval(sayTick, 1000);
});
