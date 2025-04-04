'use strict';

// Uncomment the next lines to use your game instance in the browser
const startGameBtn = document.getElementById('start-game-button');
const gameFieldsTable = document.getElementById('game-fields');
const boardCells = gameFieldsTable.querySelector('tbody').children;
const Game = require('../modules/Game.class');
const game = new Game(boardCells);

startGameBtn.addEventListener('click', () => {
  game.restart();
  game.start();
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
