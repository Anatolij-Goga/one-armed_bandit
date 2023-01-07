const start = document.querySelector('.js-start');
const container = document.querySelector('.js-container');

start.addEventListener('submit', startGame);

function startGame(event) {
  event.preventDefault();
  const childrenLength = container.children.length;
  const {
    level: { value: level },
  } = event.currentTarget.elements;
  for (let i = 0; i < childrenLength; i += 1) {
    createPromise(Number(level), '🤩', '🤑')
      .then(response => console.log(response))
      .catch(response => console.log(response));
  }
}

function createPromise(level, victory, gameover) {
  const random = Math.random();
  const promise = new Promise((resolve, reject) => {
    if (random > level) {
      resolve(victory);
    } else {
      reject(gameover);
    }
  });
  return promise;
}
