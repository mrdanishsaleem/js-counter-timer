let timeInterval;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startTimer() {
  timeInterval = setInterval(updateTimer, 1000); // Update every 1 second
}

function pauseTimer() {
  clearInterval(timeInterval);
}

function resetTimer() {
  clearInterval(timeInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
}
