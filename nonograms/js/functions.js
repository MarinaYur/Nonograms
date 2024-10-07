import { obj, getGame, counter, colorCell, interval } from './create-new-game.js';
import { airplane } from './data5x5.js';

export default function fillCellsWithRightSolution() {
  // console.log('fillCellsWithRightSolution func');
  // console.log(obj);
  const playField = document.querySelector('.game_play-field');
  playField.innerHTML = '';
  console.log('playField', playField);
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
        // gameButton.innerHTML = '1';
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
}

export function showTooltip() {
  const saveBtn = document.querySelector('.savebtn');
  const tooltip = document.querySelector('.saved-tooltip');
  tooltip.style.display = 'block';
  tooltip.style.opacity = '1';

  const saveBtnRect = saveBtn.getBoundingClientRect();
  // let dskal= saveBtnRect.bottom + '100000';
  tooltip.style.top = `${saveBtnRect.bottom - 50}px`;
  tooltip.style.left = `${saveBtnRect.right}px`;
  console.log(saveBtnRect.bottom, tooltip.style.top);

  setTimeout(() => {
    console.log('setTimeout');
    tooltip.style.opacity = '0';
    setTimeout(() => {
        tooltip.style.display = 'none';
    }, 300);
}, 1000);
}