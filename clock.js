function secondRotation(seconds) {
  let degRotation = 6*seconds;
  return degRotation;
}

function minuteRotation(minutes, seconds) {
  let degRotation = 6*minutes + (seconds*6)/60;
  return degRotation;
}

function hourRotation(hours, minutes) {
  let degRotation = (hours * 30) + ((minutes *6)/12);
  return degRotation;
}

console.log(secondRotation(90), minuteRotation(40, 23), hourRotation(2, 40));