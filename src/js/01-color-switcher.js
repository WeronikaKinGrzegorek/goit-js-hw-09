const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const documentBody = document.querySelector('body');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let intervalId;
const handleStart = () => {
  function changeColor() {
    documentBody.style.backgroundColor = getRandomHexColor();
  }
  intervalId = setInterval(changeColor, 1000);
  startButton.setAttribute('disabled', true);
};

startButton.addEventListener('click', handleStart);

const handleStop = () => {
  clearInterval(intervalId);
  startButton.removeAttribute('disabled');
};

stopButton.addEventListener('click', handleStop);
