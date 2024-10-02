import { dino, frog, bow, girl, duck } from "./data15x15.js";
import { airplane, hourglass, heart, five, dog } from "./data5x5.js";
import { kettle, apple, cat, saucepan, lama } from "./data10x10.js";
import { centerSection } from "./center-section.js";
// import { timerFunc } from './functions.js';

let sec = 0;
let min = 0;
let hours = 0;
let allSeconds = 0;
let localStorageObjKey = 0;
let ifWin = false;
let ifSaved = false;
let ifSound = true;
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
  console.log("gameName", gameName);

  const playField = document.querySelector(".game_play-field");
  playField.innerHTML = "";
  playField.style.width = gameName.playFieldWidth;
  let count = 0;
  console.log("gameName.game before for", gameName.game);
  for (let i = 0; i < gameName.game.length; i += 1) {
    // console.log('gameName.game in for', gameName.game);
    const gameButtonBlock = document.createElement("div");
    gameButtonBlock.className = "game_button-block";
    playField.append(gameButtonBlock);
    for (let j = 0; j < gameName.game[i].length; j += 1) {
      // console.log('gameName.game', gameName.game[i])
      const gameButton = document.createElement("div");
      gameButton.classList = "game_button g-button";
      gameButtonBlock.append(gameButton);

      // gameButton.innerHTML =
      //   +gameName.game[i][j] === 1 ? gameName.game[i][j] : '';
      console.log(gameButton.innerHTML);
      // if (!ifSaved) {
      if (gameName.game[i][j] === 1) {
        count += 1;
        gameButton.classList.add("right");
        console.log(ifSaved);
      }
      if (gameName.game[i][j] === 2) {
        gameButton.classList.add("game_button--crossed");
        // sounndOfBlackCellOn('cross');
      }
      if (gameName.game[i][j] === 3) {
        gameButton.classList.add("game_button--colored");
        // sounndOfBlackCellOn('black');
      }
      if (gameName.game[i][j] === 4) {
        gameButton.classList.add("game_button--crossed");
        // sounndOfBlackCellOn(cross);
        gameButton.classList.add("right");
      }
      if (gameName.game[i][j] === 5) {
        gameButton.classList.add("game_button--colored");
        // sounndOfBlackCellOn('black');
        gameButton.classList.add("right");
      }
      //   ifSaved = false;
      // } else {
      //   if (+gameName.game[i][j] === 1) {
      //     gameButton.classList.add('right');
      //   }
      // }
    }
    gameButtonBlock.style.width = gameName.gameButtonBlock;
  }
  console.log(count);
  //     if(gameName.stopWatch){
  //   const centerStimer = document.querySelector('.center-s_timer');
  //   centerStimer.innerHTML = gameName.stopWatch;
  //   const timer = centerStimer.childNodes;
  //       const sec = timer[2].innerHTML;
  //       const min = timer[0].innerHTML;
  //   timerFunc(sec, min);
  // }
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
  const resultInObj = {};

  const bestGameResultObj = {
    obj: obj.name,
    size: obj.size,
    stopWatch: stopWatch,
    allSeconds: allSeconds,
  };

  if ("nonograms" in localStorage) {
    nonogramsBestResults = JSON.parse(localStorage.nonograms);
    console.log(nonogramsBestResults);
  }

  if ("1" in nonogramsBestResults === false) {
    nonogramsBestResults[1] = bestGameResultObj;
  } else if ("2" in nonogramsBestResults === false) {
    nonogramsBestResults[2] = bestGameResultObj;
  } else if ("3" in nonogramsBestResults === false) {
    nonogramsBestResults[3] = bestGameResultObj;
  } else if ("4" in nonogramsBestResults === false) {
    nonogramsBestResults[4] = bestGameResultObj;
  } else if ("5" in nonogramsBestResults === false) {
    nonogramsBestResults[5] = bestGameResultObj;
  } else {
    delete nonogramsBestResults[1];
    nonogramsBestResults[1] = nonogramsBestResults[2];
    nonogramsBestResults[2] = nonogramsBestResults[3];
    nonogramsBestResults[3] = nonogramsBestResults[4];
    nonogramsBestResults[4] = nonogramsBestResults[5];
    nonogramsBestResults[5] = bestGameResultObj;
  }
  const nonogramsBestResultsJson = JSON.stringify(nonogramsBestResults);
  localStorage.nonograms = nonogramsBestResultsJson;
  outputLastResults(nonogramsBestResults);
}

export function outputLastResults(nonogramsBestResults) {
  //transformation localStorage object to array
  const arrFromNonogramsBestResults = [];
  for (let key in nonogramsBestResults) {
    arrFromNonogramsBestResults.push(nonogramsBestResults[key]);
  }

  //sort array of best results
  arrFromNonogramsBestResults.sort(function (a, b) {
    return a.allSeconds - b.allSeconds;
  });
  console.log("arrFromNonogramsBestResults", arrFromNonogramsBestResults);
  const savedResults = document.querySelectorAll(".saved-res");
  savedResults.forEach(
    (elem, index) =>
      (elem.innerHTML = `<div>${arrFromNonogramsBestResults[index].stopWatch}</div>  <div>${arrFromNonogramsBestResults[index].obj}</div>  <div>${arrFromNonogramsBestResults[index].size}</div>`)
  );
}

export const getGame = function (gameName) {
  ifWin = false;
  let name = {};
  if (gameName === "savedGame") {
    name = JSON.parse(localStorage.savedGame);
    counter = name.counter;
    console.log("counter after localStorage", counter);
    // ifSaved = true;
  } else {
    name = map.get(gameName);
    counter = 0;
  }
  console.log("counter continue", counter);
  createPlayField(name);
  createTopClue(name);
  createLeftClue(name);
  obj = name;
};

export const getSavedGame = function () {
  const name = map.get(gameName);
  createPlayField(name);
  createTopClue(name);
  createLeftClue(name);
  obj = name;
  counter = 0;
};

export function msgAboutSolvedNonogram() {
  if (counter === obj.count) {
    if (ifSound) {
      const audio = new Audio("./../rss-nonograms/assets/win-sound.mp3");
      audio.play();
    }
    setTimeout(() => {
      const centerS = document.querySelector(".center-s");
      const solveMsg = document.createElement("p");
      solveMsg.className = "solveMsg";
      centerS.prepend(solveMsg);
      solveMsg.innerHTML = `Great! You have solved the nonogram in ${allSeconds} seconds!`;
      //  alert(`Great! You have solved the nonogram in ${allSeconds} seconds!`);

      allSeconds = 0;
      const { body } = document;
      body.addEventListener("click", () => {
        solveMsg.remove();
      });
    }, 500);
    clearInterval(interval);
    counter = 0;
    ifWin = true;
    const gameButtons = document.querySelectorAll(".game_button");
    gameButtons.forEach((gameButton) => {
      gameButton.style.pointerEvents = "none";
    });
    saveToStorage();
  }
}

// eslint-disable-next-line no-unused-vars
function timerStep() {
  // if (secOfSavedGame) {
  //   sec = secOfSavedGame;
  //   min = minOfSaveGame;
  // } else {
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
  console.log(timer);
  const playField = document.querySelector(".game_play-field");
  playField.removeEventListener("click", timerFunc);
  const gameButtons = document.querySelectorAll(".game_button");
  gameButtons.forEach((gameButton) => {
    gameButton.removeEventListener("click", timerFunc);
  });
  playField.removeEventListener("click", timerFunc);
}

export function sounndOfBlackCellOn(event) {
  const audio = new Audio();
  if (ifSound) {
    if (event === "black") {
      audio.src = "./../rss-nonograms/assets/sound-for-black-cell.mp3";
    }
    if (event === "cross") {
      audio.src = "./../rss-nonograms/assets/sound-for-cross.mp3";
    }
    if (event === "empty") {
      audio.src = "./../rss-nonograms/assets/sound-for-empty-cell.mp3";
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
        sounndOfBlackCellOn("black");
        counter += 1;
      } else {
        e.target.classList.remove("game_button--colored");
        sounndOfBlackCellOn("empty");
        counter -= 1;
      }
    } else if (!e.target.classList.contains("game_button--colored")) {
      e.target.classList.remove("game_button--crossed");
      e.target.classList.add("game_button--colored");
      sounndOfBlackCellOn("black");
      counter -= 1;
    } else {
      e.target.classList.remove("game_button--colored");
      sounndOfBlackCellOn("empty");
      counter += 1;
    }
    removeListenersWithTimerFunc();
  }
  if (e.target.classList.contains("c-button") && e.target.innerHTML !== "") {
    if (e.target.classList.contains("game_button--crossed-clue")) {
      e.target.classList.remove("game_button--crossed-clue");
      sounndOfBlackCellOn("empty");
    } else {
      e.target.classList.add("game_button--crossed-clue");
      sounndOfBlackCellOn("cross");
    }
  }

  console.log("counter", counter);
  console.log("e.target", e.target);
  msgAboutSolvedNonogram();
}

export function resetGame() {
  resetTimer();
  counter = 0;
  ifWin = false;
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
  // console.log(counter === obj.count);
  if (ifWin) {
    alert("This game was finish, please choose another nonogaram");
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
  });

  const savedGame = obj;
  savedGame.counter = counter;
  savedGame.game = saveGameArray;
  console.log("saveGame.counter", savedGame.counter);
  const centerStimer = document.querySelector(".center-s_timer");

  // const timer = centerStimer.childNodes;
  savedGame.stopWatch = centerStimer.innerHTML;

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
  console.log(savedGame.top);
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
  console.log('soundSwitcher', soundSwitcher);
  if (ifSound) {
    soundSwitcher.classList.add("sound-switcher--active");
    // soundSwitcher.classList.remove("sound-switcher");
    ifSound = false;
    console.log('ifSound', ifSound);
  } else {
    // soundSwitcher.classList.add("sound-switcher");
    soundSwitcher.classList.remove("sound-switcher--active");
    ifSound = true;
    console.log('ifSound', ifSound);
  }
}
