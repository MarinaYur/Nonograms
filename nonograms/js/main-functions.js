import { dino, frog, bow, girl, duck } from "./data15x15.js";
import { airplane, hourglass, heart, five, dog } from "./data5x5.js";
import { kettle, apple, cat, saucepan, lama } from "./data10x10.js";
import { centerSection } from "./center-section.js";
import { showTooltip, setPlayFieldSizes, isShownSol, setIsShownSol } from "./functions.js";

let sec = 0;
let min = 0;
let hours = 0;
let allSeconds = 0;
let ifWin = false;
let ifSound = true;
let solveMsg = '';
const cantSaveSolvedMsg = 'This game was finish, please choose another nonogaram';
export let nonogramsBestResults = {};

export const localStorageObj = {};

export let counter = 0;
export let obj = airplane;

export let interval;

export const map = new Map();
map.set("dino", dino);
map.set("airplane", airplane);
map.set("kettle", kettle);
map.set("apple", apple);
map.set("cat", cat);
map.set("saucepan", saucepan);
map.set("lama", lama);
map.set("frog", frog);
map.set("bow", bow);
map.set("girl", girl);
map.set("duck", duck);
map.set("hourglass", hourglass);
map.set("heart", heart);
map.set("five", five);
map.set("dog", dog);

export function createPlayField(gameName) {
let objSizes = {};
window.onresize = () => {
  objSizes = setPlayFieldSizes(gameName);
};
  const playField = document.querySelector(".game_play-field");
  playField.innerHTML = "";
  playField.style.width = gameName.playFieldWidth;
  let count = 0;
  console.log("objSizes", objSizes);
  for (let i = 0; i < gameName.game.length; i += 1) {
    const gameButtonBlock = document.createElement("div");
    gameButtonBlock.className = "game_button-block";
    playField.append(gameButtonBlock);
    for (let j = 0; j < gameName.game[i].length; j += 1) {
      const gameButton = document.createElement("div");
      gameButton.classList = "game_button g-button";
      gameButtonBlock.append(gameButton);
      if (gameName.game[i][j] === 1) {
        count += 1;
        gameButton.classList.add("right");
      }
      if (gameName.game[i][j] === 2) {
        gameButton.classList.add("game_button--crossed");
      }
      if (gameName.game[i][j] === 3) {
        gameButton.classList.add("game_button--colored");
      }
      if (gameName.game[i][j] === 4) {
        gameButton.classList.add("game_button--crossed");
        gameButton.classList.add("right");
      }
      if (gameName.game[i][j] === 5) {
        gameButton.classList.add("game_button--colored");
        gameButton.classList.add("right");
      }
    }
    gameButtonBlock.style.width = gameName.gameButtonBlock;
  }
}

export function createTopClue(gameName) {

  const gameTopClue = document.querySelector(".game_top-clue");
  gameTopClue.innerHTML = "";
  for (let i = 0; i < gameName.top.length; i += 1) {
    const gameButtonBlock = document.createElement("div");
    gameButtonBlock.className = "game_button-block";
    gameTopClue.append(gameButtonBlock);
    for (let j = 0; j < gameName.top[i].length; j += 1) {
      const topClueButton = document.createElement("div");
      topClueButton.classList = "game_top-button c-button";
      gameButtonBlock.append(topClueButton);
      const regexp = /^\dx$/;
      if (regexp.test(gameName.top[i][j])) {
        topClueButton.innerHTML = parseInt(gameName.top[i][j]);
        topClueButton.classList.add("game_button--crossed");
      } else {
        topClueButton.innerHTML =
          gameName.top[i][j] !== 0 ? gameName.top[i][j] : "";
      }
    }
    gameButtonBlock.style.width = gameName.gameButtonBlock;
  }
}

export function createLeftClue(gameName) {
  const gameLeftClue = document.querySelector(".game_left-clue");
  gameLeftClue.innerHTML = "";
  for (let i = 0; i < gameName.left.length; i += 1) {
    const gameButtonBlock = document.createElement("div");

    gameButtonBlock.className = "game_button-block1";

    gameLeftClue.append(gameButtonBlock);
    for (let j = 0; j < gameName.left[i].length; j += 1) {
      const leftClueButton = document.createElement("div");
      leftClueButton.classList = "game_left-button c-button";
      gameButtonBlock.append(leftClueButton);
      const regexp = /^\dx$/;
      if (regexp.test(gameName.left[i][j])) {
        leftClueButton.innerHTML = parseInt(gameName.left[i][j]);
        leftClueButton.classList.add("game_button--crossed");
      } else {
        leftClueButton.innerHTML =
          gameName.left[i][j] !== 0 ? gameName.left[i][j] : "";
      }
    }
    gameButtonBlock.style.width = gameName.gameButtonBlockLeft;
  }
}

export function saveToStorage() {
  const centerStimer = document.querySelector(".center-s_timer");
  const timer = centerStimer.childNodes;
  const stopWatch = timer[0].innerHTML + ":" + timer[2].innerHTML;

  const gameResultObj = {
    obj: obj.name,
    size: obj.size,
    stopWatchTime: stopWatch,
    allSeconds: allSeconds,
  };

  if ("nonograms" in localStorage) {
    nonogramsBestResults = JSON.parse(localStorage.nonograms);
  }
  const length = nonogramsBestResults.length;
    if (length !== 10) {
      nonogramsBestResults[length] = gameResultObj;
    } else if (gameResultObj.allSeconds < nonogramsBestResults[length - 1].allSeconds){
      delete nonogramsBestResults[length - 1];
      nonogramsBestResults[length - 1] = gameResultObj;
    }

  let sortedResults = sortNonogramsResults(nonogramsBestResults);
  const nonogramsBestResultsJson = JSON.stringify(sortedResults);
  localStorage.nonograms = nonogramsBestResultsJson;
  outputLastResults(sortedResults);
}

 export function sortNonogramsResults (results) {
  const arrFromNonogramsBestResults = [];
  for (let key in results) {
    arrFromNonogramsBestResults.push(results[key]);
  }

  //sort array of best results
  arrFromNonogramsBestResults.sort(function (a, b) {
    return a.allSeconds - b.allSeconds;
  });
  return arrFromNonogramsBestResults;
 }

export function outputLastResults(sortedResults) {
  const savedResults = document.querySelectorAll(".saved-res");
  savedResults.forEach((elem, index) => {
    if (
      sortedResults &&
      sortedResults[index]?.stopWatchTime
    ) {
      elem.innerHTML = `<div>${sortedResults[index]?.stopWatchTime}</div>  <div>${sortedResults[index]?.obj}</div>  <div>${sortedResults[index]?.size}</div>`;
    } else elem.innerHTML = '';
  });
}

export const getGame = function (gameName) {
  const nonogramName = document.querySelector('.center-s-nonogram-name');
  ifWin = false;
  let newObj = {};
  if (gameName === "savedGame") {
    newObj = JSON.parse(localStorage.savedGame);
    counter = newObj.counter;
  } else {
    newObj = map.get(gameName);
    counter = 0;
  }
  nonogramName.childNodes[0].innerHTML = (newObj.name)[0].toUpperCase() + (newObj.name).slice(1);
  nonogramName.childNodes[1].innerHTML = '';
  createPlayField(newObj);
  createTopClue(newObj);
  createLeftClue(newObj);
  obj = newObj;
};

export const getSavedGame = function () {
  const name = map.get(gameName);
  createPlayField(name);
  createTopClue(name);
  createLeftClue(name);
  obj = name;
  counter = 0;
};

export function createModal(msg, classStr1, classStr2) {
  const { body } = document;
      const solveModal = document.createElement("div");
      const solveMsg = document.createElement("p");
      solveModal.append(solveMsg);
      solveModal.className = classStr1;
      solveMsg.className = classStr2;
      body.prepend(solveModal);
      solveMsg.innerHTML = msg;

      allSeconds = 0;
      body.addEventListener("click", () => {
        solveModal.remove();
      });
}

export function msgAboutSolvedNonogram() {
  const nonogramName = document.querySelector('.center-s-nonogram-name');

  if (counter === obj.count) {
    if (ifSound) {
      const audio = new Audio("./../assets/win-sound.mp3");
      audio.play();
    }
    setTimeout(() => {
      console.log(allSeconds)
      solveMsg = `Great! You have solved the nonogram in ${allSeconds} seconds!`
      createModal(solveMsg, 'solve-modal', 'solveMsg');
    }, 1);
    clearInterval(interval);
    counter = 0;
    ifWin = true;
    nonogramName.childNodes[1].innerHTML +=  ' solved';
    const gameButtons = document.querySelectorAll(".game_button");
    gameButtons.forEach((gameButton) => {
      gameButton.style.pointerEvents = "none";
    });
    saveToStorage(this);
  }
}

// eslint-disable-next-line no-unused-vars
function timerStep() {
  allSeconds += 1;
  sec += 1;

  if (sec === 60) {
    min += 1;
    sec = 0;
  }
  if (min === 60) {
    hours += 1;
    min = 0;
  }
  document.querySelector(".center-s_timer").innerHTML =
    `<span>${min.toString().padStart(2, "0")}</span>:</span><span>${sec.toString().padStart(2, "0")}</span>`;
}

export function timerFunc(remove) {
  if (remove) {
    const playField = document.querySelector(".game_play-field");
    playField.removeEventListener("click", timerFunc);
  }
  interval = setInterval(timerStep, 1000);
}

export function removeListenersWithTimerFunc() {
  const timer = document.querySelector(".timer");
  const playField = document.querySelector(".game_play-field");
  playField.removeEventListener("click", timerFunc);
  const gameButtons = document.querySelectorAll(".game_button");
  gameButtons.forEach((gameButton) => {
    gameButton.removeEventListener("click", timerFunc);
  });
  playField.removeEventListener("click", timerFunc);
}

export function soundOfBlackCellOn(event) {
  const audio = new Audio();
  if (ifSound) {
    if (event === "black") {
      audio.src = "./../nonograms/assets/sound-for-black-cell.mp3";
    }
    if (event === "cross") {
      audio.src = "./../nonograms/assets/sound-for-cross.mp3";
    }
    if (event === "empty") {
      audio.src = "./../nonograms/assets/sound-for-empty-cell.mp3";
    }
    audio.play();
  }
}

export function colorCell(e) {
  if (e.target.classList.contains("game_button")) {
    if (e.target.classList.contains("right")) {
      if (!e.target.classList.contains("game_button--colored")) {
        e.target.classList.remove("game_button--crossed");
        e.target.classList.add("game_button--colored");
        soundOfBlackCellOn("black");
        counter += 1;
      } else {
        e.target.classList.remove("game_button--colored");
        soundOfBlackCellOn("empty");
        counter -= 1;
      }
    } else if (!e.target.classList.contains("game_button--colored")) {
      e.target.classList.remove("game_button--crossed");
      e.target.classList.add("game_button--colored");
      soundOfBlackCellOn("black");
      counter -= 1;
    } else {
      e.target.classList.remove("game_button--colored");
      soundOfBlackCellOn("empty");
      counter += 1;
    }
    removeListenersWithTimerFunc();
  }
  if (e.target.classList.contains("c-button") && e.target.innerHTML !== "") {
    if (e.target.classList.contains("game_button--crossed-clue")) {
      e.target.classList.remove("game_button--crossed-clue");
      soundOfBlackCellOn("empty");
    } else {
      e.target.classList.add("game_button--crossed-clue");
      soundOfBlackCellOn("cross");
    }
  }

  msgAboutSolvedNonogram();
}

export function resetGame() {
  const nonogramName = document.querySelector('.center-s-nonogram-name');
  nonogramName.childNodes[1].innerHTML = '';
  resetTimer();
  counter = 0;
  ifWin = false;
  setIsShownSol();
  const gameButtons = document.querySelectorAll(".game_button");
  gameButtons.forEach((gameButton) => {
    gameButton.classList.remove("game_button--colored");
    gameButton.classList.remove("game_button--crossed");
    gameButton.style.pointerEvents = "auto";
  });
  const gameClueButtons = document.querySelectorAll(".c-button");
  gameClueButtons.forEach((gameButton) => {
    gameButton.classList.remove("game_button--crossed-clue");
  });
}

export function resetTimer() {
  sec = 0;
  min = 0;
  hours = 0;
  allSeconds = 0;
  clearInterval(interval);
  const centerStimer = document.querySelector(".center-s_timer");
  centerStimer.innerHTML = "</span><span>00</span>:</span><span>00</span>";
  const gameButtons = document.querySelectorAll(".game_button");
  gameButtons.forEach((gameButton) => {
    gameButton.addEventListener("click", timerFunc);
  });
}

export function saveGame() {
  if (ifWin || isShownSol) {
    setTimeout(() => {
      createModal(cantSaveSolvedMsg, 'cant-solve-modal', 'cant-save-msg');
    }, 1);
    return;
  }
  //save game field
  const gameButtonBlocks = document.querySelectorAll(
    ".game_play-field .game_button-block"
  );

  let saveGameBlockArray = [];
  let saveGameArray = [];
  gameButtonBlocks.forEach((block) => {
    block.childNodes.forEach((node, index) => {
      //save obj.game
      //0 - without extra class
      //1 - with right class
      //2 -with 'game_button--crossed' class
      //3 - with 'game_button--colored' class
      //4- with 'game_button--crossed' and 'right' classes
      //5 with 'game_button--colored' and 'right' classes
      if (
        node.classList.contains("game_button--colored") &&
        node.classList.contains("right")
      ) {
        saveGameBlockArray.push(5);
      } else if (
        node.classList.contains("game_button--crossed") &&
        node.classList.contains("right")
      ) {
        saveGameBlockArray.push(4);
      } else if (node.classList.contains("game_button--colored")) {
        saveGameBlockArray.push(3);
      } else if (node.classList.contains("game_button--crossed")) {
        saveGameBlockArray.push(2);
      } else if (node.classList.contains("right")) {
        saveGameBlockArray.push(1);
      } else {
        saveGameBlockArray.push(0);
      }
    });
    saveGameArray.push(saveGameBlockArray);
    saveGameBlockArray = [];
    showTooltip();
  });

  const savedGame = JSON.parse(JSON.stringify(obj));
  savedGame.counter = counter;
  savedGame.game = saveGameArray;
  const centerStimer = document.querySelector(".center-s_timer");
  savedGame.stopWatchTime = centerStimer.innerHTML;

  //save obj.left (clue)
  const gameButtonBlocksClue = document.querySelectorAll(".game_button-block1");
  const saveLeftArray = [];
  let saveLeftBlockArray = [];
  gameButtonBlocksClue.forEach((block) => {
    block.childNodes.forEach((node, index) => {
      //     //save obj.left
      //     //0 - without extra class
      //     //1 - with right class
      //     //2 -with 'game_button--crossed' class
      if (node.classList.contains("game_button--crossed-clue")) {
        saveLeftBlockArray.push(node.innerHTML + "x");
      } else if (node.classList.contains("game_left-button")) {
        saveLeftBlockArray.push(node.innerHTML);
      } else {
        saveLeftBlockArray.push(0);
      }
    });
    saveLeftArray.push(saveLeftBlockArray);
    saveLeftBlockArray = [];
  });
  savedGame.left = saveLeftArray;

  //save obj.top

  const buttonBlocksTopClue = document.querySelectorAll(
    ".game_top-clue .game_button-block"
  );
  const saveTopArray = [];
  let saveTopBlockArray = [];
  buttonBlocksTopClue.forEach((block) => {
    block.childNodes.forEach((node, index) => {
      //     //save obj.left
      //     //0 - without extra class
      //     //1 - with right class
      //     //2 -with 'game_button--crossed' class
      if (node.classList.contains("game_button--crossed-clue")) {
        saveTopBlockArray.push(node.innerHTML + "x");
      } else if (node.classList.contains("game_top-button")) {
        saveTopBlockArray.push(node.innerHTML);
      }
    });
    saveTopArray.push(saveTopBlockArray);
    saveTopBlockArray = [];
  });
  savedGame.top = saveTopArray;
  localStorage["savedGame"] = JSON.stringify(savedGame);
}

export function init() {
  if (localStorage.getItem("theme")) {
    document.documentElement.setAttribute("theme", "dark");
  } else {
    document.documentElement.removeAttribute("theme");
  }
}

export function switchSound() {
  const soundSwitcher = document.querySelector(".sound-switcher");
  if (ifSound) {
    soundSwitcher.classList.add("sound-switcher--active");
    ifSound = false;
  } else {
    soundSwitcher.classList.remove("sound-switcher--active");
    ifSound = true;
  }
}