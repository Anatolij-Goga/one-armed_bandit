const start = document.querySelector('.js-start');
const container = document.querySelector('.js-container');
const delay = 700;

start.addEventListener('submit', startGame);

function startGame(event) {
  event.preventDefault();

  const arraySmile = [];
  const arrayDollar = [];

  const childrenLength = container.children.length;
  const {
    level: { value: level },
    start,
  } = event.currentTarget.elements;

  start.disabled = true;

  for (let i = 0; i < childrenLength; i += 1) {
    const item = container.children[i];
    item.textContent = '';
    createPromise(Number(level), '🤩', '🤑', delay * i)
      .then(response => {
        markField(item, response);
        arraySmile.push(response);
      })
      .catch(response => {
        markField(item, response);
        arrayDollar.push(response);
      })
      .finally(() => {
        if (i === childrenLength - 1) {
          start.disabled = false;
        }
        const result =
          arraySmile.length === childrenLength || arrayDollar.length === childrenLength;
        if (result) {
          alert('YOU ARE WINNER!!!');
        }
      });
  }
}

function isVictories() {
  return;
}

function markField(item, smile) {
  item.textContent = smile;
}

function createPromise(level, victory, gameover, delay) {
  const random = Math.random();
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (random > level) {
        resolve(victory);
      } else {
        reject(gameover);
      }
    }, delay);
  });
  return promise;
}
