'use strict';

const Game = require('../modules/Game.class.js');

const game = new Game();

const startButton = document.querySelector('.button--start');
const helpButton = document.querySelector('.button--help');
const gameScore = document.querySelector('.game-header__score-value');
const fieldCells = document.querySelectorAll('.game-field__cell');
const messageStart = document.querySelector('.message--start');
const messageWin = document.querySelector('.message--win');
const messageLose = document.querySelector('.message--lose');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal__content');
const closeModalBtn = document.querySelector('.modal__close');
const modalCloseBtn = document.querySelector('.modal__button');

let previousState = game.getState();

function updateUI() {
  const newState = game.getState();

  newState.forEach((row, y) => {
    row.forEach((value, x) => {
      const cell = fieldCells[y * 4 + x];
      const prevValue = previousState[y][x];

      cell.textContent = value || '';
      cell.className = 'game-field__cell';

      if (value) {
        cell.classList.add(`game-field__cell--${value}`);
      }

      if (value !== prevValue) {
        cell.classList.add('game-field__cell--appear');

        setTimeout(() => {
          cell.classList.remove('game-field__cell--appear');
        }, 150);
      }
    });
  });

  previousState = newState.map((row) => [...row]);

  gameScore.textContent = game.getScore();
  messageStart.classList.toggle('hidden', game.getStatus() !== 'idle');
  messageWin.classList.toggle('hidden', game.getStatus() !== 'win');
  messageLose.classList.toggle('hidden', game.getStatus() !== 'lose');

  startButton.textContent = game.getStatus() === 'idle' ? 'Start' : 'Restart';
  startButton.classList.toggle('button--start', game.getStatus() === 'idle');
  startButton.classList.toggle('button--restart', game.getStatus() !== 'idle');
}

startButton.addEventListener('click', () => {
  if (game.getStatus() === 'idle') {
    game.start();
  } else {
    game.restart();
  }

  updateUI();
});

function openModal() {
  modal.classList.remove('modal--hidden');
  document.body.style.overflow = 'hidden';

  if (modalContent) {
    modalContent.scrollTop = 0;
  }
}

function closeModal() {
  modal.classList.add('modal--hidden');
  document.body.style.overflow = '';
}

helpButton.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
modalCloseBtn.addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('modal--hidden')) {
    closeModal();

    return;
  }

  if (
    !modal.classList.contains('modal--hidden')
    || game.getStatus() !== 'playing'
  ) {
    return;
  }

  switch (e.key) {
    case 'ArrowLeft':
      game.moveLeft();
      break;
    case 'ArrowRight':
      game.moveRight();
      break;
    case 'ArrowUp':
      game.moveUp();
      break;
    case 'ArrowDown':
      game.moveDown();
      break;
    default:
      return;
  }
  updateUI();
});

updateUI();
