const colorPicker = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let switherId = null;

startBtn.addEventListener('click', startOnBtnClick);

stopBtn.addEventListener('click', stopOnBtnClick);

function startOnBtnClick() {
  switherId = setInterval(() => {
    colorPicker.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function stopOnBtnClick() {
  clearInterval(switherId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
