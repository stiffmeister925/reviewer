const button = document.querySelector('#btn');

function callbackFn(target) {
  // event.target === button;

  // This will cause a side effect? But Why? Bakit?!
  // 👇
  // if (event.target.classList.contains('active')) {
  //   event.target.classList.remove('active');
  // } else {
  //   event.target.classList.add('active');
  // }
  target.classList.toggle('active');
}

button.addEventListener('click', callbackFn);

//////////////////////////////////////

const setAlarmBtn = document.querySelector('#set-alarm-button');
const stopAlarmBtn = document.querySelector('#stop-alarm-button');
const timer = document.querySelector('#time');
const input = document.querySelector('#alarm-set-field');


const setAlarm = () => {
  let time = input.value;
  setInterval(function() {
    time--;
    seconds.innerHTML = time%60;
    minutes.innerHTML = parseInt(time/60);
  }, 1000);
}

const stop = () => {
  clearInterval(interval);
  interval = null;
}

// Initialize the Audio
const audio = new Audio('alarmsound.mp3');

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

stopAlarmBtn.addEventListener('click', stop);
setAlarmBtn.addEventListener('click', setAlarm);