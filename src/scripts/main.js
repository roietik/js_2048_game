'use strict';

// Uncomment the next lines to use your game instance in the browser
const startGameBtn = document.getElementById('start-game-button');
const resetGameBtn = document.getElementById('restart-game-button');
const gameFieldsTable = document.getElementById('game-fields');
const gameScore = document.getElementById('game-score');
const startMessageElement = document.querySelector('.message-start');
const winMessageElement = document.querySelector('.message-win');
const loseMessageElement = document.querySelector('.message-lose');
const boardCells = gameFieldsTable.querySelector('tbody').children;
const Game = require('../modules/Game.class');
const game = new Game(
  boardCells,
  gameScore,
  startMessageElement,
  winMessageElement,
  loseMessageElement,
);

startGameBtn.addEventListener('click', () => {
  game.restart();
  game.start();
  game.renderBoard();
});

resetGameBtn.addEventListener('click', () => {
  game.restart();
  // game.start();
  game.renderBoard();
});

document.addEventListener('keydown', ($event) => {
  switch ($event.key) {
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
      break;
  }
});
