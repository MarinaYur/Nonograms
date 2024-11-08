import {
  obj
} from "./main-functions.js";

export let isShownSol = false;

export const setIsShownSol = () => {
  isShownSol = false;
};

export default function fillCellsWithRightSolution() {
  const playField = document.querySelector(".game_play-field");
  playField.innerHTML = "";
  isShownSol = true;
  const nonogramName = document.querySelector('.center-s-nonogram-name');
  nonogramName.childNodes[1].innerHTML +=  ' solution shown';

  playField.style.width = obj.playFieldWidth;
  for (let i = 0; i < obj.game.length; i += 1) {
    const gameButtonBlock = document.createElement("div");
    gameButtonBlock.className = "game_button-block";
    playField.append(gameButtonBlock);
    for (let j = 0; j < obj.game[i].length; j += 1) {
      const gameButton = document.createElement("div");
      gameButton.classList = "game_button g-button";
      gameButtonBlock.append(gameButton);
      if (obj.game[i][j] === 1 || obj.game[i][j] === 5) {
        // gameButton.innerHTML = '1';
        gameButton.classList.add("right");
        gameButton.classList.add("game_button--colored");
      }
    }
    gameButtonBlock.style.width = obj.gameButtonBlock;
  }
  const gameButtons = document.querySelectorAll(".game_button");
  gameButtons.forEach((gameButton) => {
    gameButton.style.pointerEvents = "none";
  });

}

export function showTooltip() {
  const saveBtn = document.querySelector(".savebtn");
  const tooltip = document.querySelector(".saved-tooltip");
  tooltip.style.display = "block";
  tooltip.style.opacity = "1";

  const saveBtnRect = saveBtn.getBoundingClientRect();
  tooltip.style.top = `${saveBtnRect.bottom - 50}px`;
  tooltip.style.left = `${saveBtnRect.right}px`;
  console.log(saveBtnRect.bottom, tooltip.style.top);

  setTimeout(() => {
    console.log("setTimeout");
    tooltip.style.opacity = "0";
    setTimeout(() => {
      tooltip.style.display = "none";
    }, 300);
  }, 1000);
}

export const setPlayFieldSizes = (obj) => {
  const objSizes = {};
  let screenSize =  window.innerWidth;
  const gameButtonBlockLeftWidth = Number.parseInt(obj.gameButtonBlockLeft)
  const commonBorderWidth = gameButtonBlockLeftWidth % 25;
  if (screenSize <= 820) {
    switch (obj.size) {
      case '5x5': {
        objSizes.playFieldWidth = '72px';
        objSizes.gameButtonBlock = '72px';
       const width = ((gameButtonBlockLeftWidth - commonBorderWidth) / 25) * 14 + commonBorderWidth;
        objSizes.gameButtonBlockLeft  = width + 'px';
      }
    }
  }
  return objSizes;
}
