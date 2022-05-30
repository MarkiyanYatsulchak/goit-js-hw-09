import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() <= options.defaultDate.getTime()) {
      Notify.failure('Please choose a future date');
      return;
    }
    //   selectedDates = selectedDates[0];
  },
};

const inputDate = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

const timer = {
  isActive: false,
  start() {
    const startTime = Date.now();

    setInterval(() => {
      const currentTime = Date.now();
    }, 1000);
    const deltaTime = startTime - currentTime;
    const { days, hours, minutes, seconds } = convertMs(deltaTime);
  },
};

timer.start();
// class Timer {
//     constructor() {
//         this.countdownTime = 0;
//         this.timerId = null;
//     }

//     updateCountdown({ days, hours, minutes, seconds }) {
//         days.textContent = days;
//         hours.textContent = hours;
//         minutes.textContent = minutes;
//         seconds.textContent = seconds;
//     }

//     btnStartStatus(status) {
//         btnStart.disabled = status;
//     }

//     inputDateStatus(status) {
//         inputDate.disabled = status;
//     }

//     btnStopStatus(status) {
//         btnStop.disabled = status;
//     }

// }

function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
