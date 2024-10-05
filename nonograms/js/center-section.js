import { airplane } from './data5x5.js';
import {
  getGame,
  colorCell,
  resetGame,
  timerFunc,
  saveGame,
  soundOfBlackCellOn, init
} from './create-new-game.js';
import fillCellsWithRightSolution from './functions.js';
const centerSection = document.addEventListener('DOMContentLoaded', () => {
  const { body } = document;
  const main = document.createElement('main');
  const centerS = document.createElement('section');
  // const soundSwitcherTimer = document.createElement('div');
  const timer = document.createElement('h2');
  const timerMin = document.createElement('span');
  const timerSemicolon = document.createElement('span');
  const timerSec = document.createElement('span');
  const gameField = document.createElement('div');
  const gameFieldLeft = document.createElement('div');
  const solutionBtn = document.createElement('button');
  const resetbtn = document.createElement('button');
  const savebtn = document.createElement('button');
  const contbtn = document.createElement('button');
  const game = document.createElement('div');
  const gameWrapper = document.createElement('div');
  const gameOneRow = document.createElement('div');
  const gameTemplate = document.createElement('div');
  const gameTopClue = document.createElement('div');
  const gameTwoRow = document.createElement('div');
  const gameLeftClue = document.createElement('div');
  const playField = document.createElement('div');

  // outputLastResults();
  playField.addEventListener('click', timerFunc);

  body.classList = '';
  centerS.classList = 'center-s';
  timer.classList = 'center-s_timer';
  gameField.className = 'game_field';
  gameFieldLeft.className = 'game_field-left';
  solutionBtn.classList = 'dropbtn solutionBtn';
  resetbtn.classList = 'dropbtn resetbtn';
  savebtn.classList = 'dropbtn savebtn';
  contbtn.classList = 'dropbtn contbtn';
  game.classList = 'game';
  gameWrapper.classList = 'game_wrapper';
  gameOneRow.classList = 'game_1row';
  gameTemplate.classList = 'game_template';
  gameTopClue.classList = 'game_top-clue';
  gameTwoRow.classList = 'game_2row';
  gameLeftClue.classList = 'game_left-clue';
  playField.classList = 'game_play-field';

  body.append(main);
  main.append(centerS);
  centerS.append(timer);
  timer.append(timerMin);
  timer.append(timerSemicolon);
  timer.append(timerSec);
  centerS.append(gameField);
  gameField.append(gameFieldLeft);
  gameFieldLeft.append(solutionBtn);
  gameFieldLeft.append(resetbtn);
  gameFieldLeft.append(savebtn);
  gameFieldLeft.append(contbtn);
  gameField.append(game);
  game.append(gameWrapper);
  gameWrapper.append(gameOneRow);
  gameOneRow.append(gameTemplate);
  gameOneRow.append(gameTopClue);
  gameWrapper.append(gameTwoRow);
  gameTwoRow.append(gameLeftClue);
  gameTwoRow.append(playField);

  solutionBtn.innerHTML = 'Solution';
  resetbtn.innerHTML = 'Reset game';
  savebtn.innerHTML = 'Save game';
  contbtn.innerHTML = 'Continue last game';
  timer.innerHTML = '<span>00</span>:</span><span>00</span>';

  getGame('airplane');

  function insertCross(e) {
    e.preventDefault();
    if (e.target.classList.contains('g-button')) {
      e.target.classList.remove('game_button--colored');
      if (e.target.classList.contains('game_button--crossed')) {
        e.target.classList.remove('game_button--crossed');
        soundOfBlackCellOn('empty');
      } else {
        e.target.classList.add('game_button--crossed');
        soundOfBlackCellOn('cross');
      }
    }
    if (e.target.classList.contains('c-button')) {
      if (e.target.classList.contains('game_button--crossed-clue')) {
        e.target.classList.remove('game_button--crossed-clue');
        soundOfBlackCellOn('empty');
      } else {
        e.target.classList.add('game_button--crossed-clue');
        soundOfBlackCellOn('cross');
      }
    }
  }

  // playField.onclick = colorCell;
  gameWrapper.addEventListener('click', colorCell);
  game.addEventListener('contextmenu', insertCross);
  solutionBtn.addEventListener('click', fillCellsWithRightSolution);
  resetbtn.addEventListener('click', resetGame);
  savebtn.addEventListener('click', saveGame);
  contbtn.addEventListener('click', () => getGame('savedGame'));
  init();
});

export { centerSection };
