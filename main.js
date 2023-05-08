// Get elements from HTML
const wMinutes = document.getElementById('w-minutes');
const wSeconds = document.getElementById('w-seconds');
const bMinutes = document.getElementById('b-minutes');
const bSeconds = document.getElementById('b-seconds');
const counter = document.getElementById('counter');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let workTime = 25; // work time in minutes
let breakTime = 5; // break time in minutes
let cycles = 0; // number of work/break cycles completed
let isWorkTime = true; // true if currently in work time, false if in break time
let intervalID; // variable to hold the setInterval ID

// Set the initial timer values
wMinutes.innerText = workTime;
wSeconds.innerText = '00';
bMinutes.innerText = breakTime;
bSeconds.innerText = '00';

// Event listeners for buttons
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

// Functions to handle timer logic
function startTimer() {
  intervalID = setInterval(updateTimer, 1000);
  startBtn.disabled = true;
}

function stopTimer() {
  clearInterval(intervalID);
  startBtn.disabled = false;
}

function resetTimer() {
  clearInterval(intervalID);
  wMinutes.innerText = workTime;
  wSeconds.innerText = '00';
  bMinutes.innerText = breakTime;
  bSeconds.innerText = '00';
  counter.innerText = '0';
  startBtn.disabled = false;
  cycles = 0;
  isWorkTime = true;
}

function updateTimer() {
  // Update the appropriate timer
  if (isWorkTime) {
    updateWorkTimer();
  } else {
    updateBreakTimer();
  }
}

function updateWorkTimer() {
  let minutes = parseInt(wMinutes.innerText);
  let seconds = parseInt(wSeconds.innerText);

  if (seconds === 0) {
    if (minutes === 0) {
      // Work timer is done
      cycles++;
      counter.innerText = cycles;
      isWorkTime = false;
      bMinutes.innerText = breakTime;
      bSeconds.innerText = '00';
    } else {
      minutes--;
      seconds = 59;
    }
  } else {
    seconds--;
  }

  wMinutes.innerText = formatTime(minutes);
  wSeconds.innerText = formatTime(seconds);
}

function updateBreakTimer() {
  let minutes = parseInt(bMinutes.innerText);
  let seconds = parseInt(bSeconds.innerText);

  if (seconds === 0) {
    if (minutes === 0) {
      // Break timer is done
      isWorkTime = true;
      wMinutes.innerText = workTime;
      wSeconds.innerText = '00';
    } else {
      minutes--;
      seconds = 59;
    }
  } else {
    seconds--;
  }

  bMinutes.innerText = formatTime(minutes);
  bSeconds.innerText = formatTime(seconds);
}

function formatTime(time) {
  // Add leading zero if time is less than 10
  return time < 10 ? `0${time}` : time;
}
