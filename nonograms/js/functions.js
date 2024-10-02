import { obj, getGame, counter, colorCell, interval } from './create-new-game.js';
import { airplane } from './data5x5.js';

export default function fillCellsWithRightSolution() {
  console.log('fillCellsWithRightSolution func');
  console.log(obj);
  const playField = document.querySelector('.game_play-field');
  playField.innerHTML = '';
  playField.style.width = obj.playFieldWidth;
  for (let i = 0; i < obj.game.length; i += 1) {
    const gameButtonBlock = document.createElement('div');
    gameButtonBlock.className = 'game_button-block';
    playField.append(gameButtonBlock);
    for (let j = 0; j < obj.game[i].length; j += 1) {
      const gameButton = document.createElement('div');
      gameButton.classList = 'game_button g-button';
      gameButtonBlock.append(gameButton);
      if (obj.game[i][j] === 1) {
        gameButton.innerHTML = '1';
        gameButton.classList.add('right');
        gameButton.classList.add('game_button--colored');
      }
    }
    gameButtonBlock.style.width = obj.gameButtonBlock;
  }
  const gameButtons = document.querySelectorAll('.game_button');
    gameButtons.forEach((gameButton) => {
      gameButton.style.pointerEvents = 'none';
    });
    // clearInterval(interval);
}

