import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const firstDelay = document.querySelector('[name="delay"]');
const delayStep = document.querySelector('[name="step"]');
const amountOfPromises = document.querySelector('[name="amount"]');
const submitButton = document.querySelector('button[type="submit"]');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}

submitButton.addEventListener('click', handleClick);

function handleClick(event) {
  event.preventDefault();

  let delay = parseInt(firstDelay.value);
  const step = parseInt(delayStep.value);
  const amount = parseInt(amountOfPromises.value);

  for (let i = 0; i < amount; i += 1) {
    let position = i + 1;
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`, {
          clickToClose: true,
        });
      })
      .catch(({ position, delay }) => {
        Notify.failure(`Rejected promise ${position} in ${delay}ms`, {
          clickToClose: true,
        });
      });
    delay += step;
  }
}
