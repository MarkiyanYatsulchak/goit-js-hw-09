const formRef = document.querySelector('.form');

formRef.addEventListener('submit', handlePromisesCreate);

function handlePromisesCreate(e) {
  e.preventDefault();
  const amountValue = +e.target.elements.amount.value;
  const delayValue = +e.target.elements.delay.value;
  const stepValue = +e.target.elements.step.value;

  for (let i = 1; i <= amountValue; i += 1) {
    let stepForCurrentPromise = delayValue + stepValue * (i - 1);

    createPromise(i, stepForCurrentPromise)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }

  e.currentTarget.reset();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
