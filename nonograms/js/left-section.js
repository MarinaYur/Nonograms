import { centerSection } from "./center-section.js";
import {
  getGame,
  resetTimer,
  outputLastResults,
  saveGame,
  getSavedGame,
  switchSound
} from "./create-new-game.js";

const leftSection = document.addEventListener("DOMContentLoaded", () => {
  let arrOfTemplates = [
    "dino",
    "frog",
    "bow",
    "girl",
    "duck",
    "airplane",
    "kettle",
    "apple",
    "cat",
    "saucepan",
    "lama",
  ];
  let prevTemplate;
  // let nonogramsBestResults = JSON.parse(localStorage.nonograms);
  const main = document.querySelector("main");
  const centerS = document.querySelector(".center-s");
  // console.log(centerS);
  const leftS = document.createElement("section");

  const size = document.createElement("div");
  const sizeP = document.createElement("p");
  const randomBtn = document.createElement("button");

  leftS.classList = "left-s";
  size.classList = "size";
  sizeP.classList = "size_p";
  randomBtn.classList = "dropbtn randombtn";

  centerS.prepend(leftS);
  leftS.append(size);
  size.prepend(sizeP);
  size.append(randomBtn);

  sizeP.innerHTML = "Choose size";
  randomBtn.innerHTML = "Random";
  createDropdown(leftS, size);

  //right section
  const rightS = document.createElement("section");
  const theme = document.createElement("div");
  const soundSwitcher = document.createElement("div");
  const darkThemeBtn = document.createElement("button");
  const lightThemeBtn = document.createElement("button");
  const savedResults = document.createElement("div");
  const headOfSaveResults = document.createElement("h2");
  const listOfBestResults = document.createElement("ol");

  rightS.classList = "right-s";
  theme.classList = "theme-btns";
  soundSwitcher.classList = 'sound-switcher';
  darkThemeBtn.classList = "theme-btns_dark";
  savedResults.classList = "saved-results";

  main.append(rightS);
  rightS.append(soundSwitcher);
  rightS.append(theme);

  theme.append(darkThemeBtn);
  theme.append(lightThemeBtn);
  rightS.append(savedResults);
  savedResults.append(headOfSaveResults);
  savedResults.append(listOfBestResults);

  darkThemeBtn.innerHTML = "Dark / Light";
  lightThemeBtn.innerHTML = "theme";

  for (let i = 0; i < 5; i += 1) {
    const savedResult = document.createElement("li");
    listOfBestResults.append(savedResult);
    savedResult.classList = "saved-res";
  }
  headOfSaveResults.innerHTML = "The latest 5 win results";

  const dropDownContent = document.querySelectorAll(".dropdown-content");
  dropDownContent.forEach((dropDown) => {
    dropDown.addEventListener("click", (e) => {
      if (e.target.hasAttribute("href")) {
        prevTemplate = e.target.innerHTML;
        getGame(e.target.innerHTML);
        resetTimer(1);
      }
    });
  });
  function createDropdown() {
    for (let i = 0; i < 3; i += 1) {
      const dropdown = document.createElement("div");
      dropdown.classList = "size_dropdown";
      const five = `<div class='dropdown-content'>
    <span href='#'>airplane</span>
    <span href='#'>hourglass</span>
    <span href='#'>heart</span>
    <span href='#'>five</span>
    <span href='#'>dog</span>
    </div>`;
      const ten = `<div class='dropdown-content'>
    <span href='#'>kettle</span>
    <span href='#'>apple</span>
    <span href='#'>cat</span>
    <span href='#'>saucepan</span>
    <span href='#'>lama</span>
    </div>`;

      const fifteen = `<div class='dropdown-content'>
    <span href='#'>dino</span>
    <span href='#'>frog</span>
    <span href='#'>bow</span>
    <span href='#'>girl</span>
    <span href='#'>duck</span>
    </div>`;
      dropdown.innerHTML = i === 0 ? five : i === 1 ? ten : fifteen;
      dropdown.innerHTML +=
        i === 0
          ? " <button class='dropbtn'>5x5</button>"
          : i === 1
            ? "<button class='dropbtn'>10x10</button>"
            : "<button class='dropbtn'>15x15</button>";
      size.append(dropdown);
    }
  }

  function chooseRandomTemplate() {
    const randomIndex = Math.floor(Math.random() * arrOfTemplates.length);
    const randomTemplate = arrOfTemplates[randomIndex];
    if (randomTemplate === prevTemplate) {
      chooseRandomTemplate();
    }
    getGame(randomTemplate);
    resetTimer(1);
    console.log("randomTemplate", randomTemplate);
  }
  randomBtn.addEventListener("click", chooseRandomTemplate);
  theme.addEventListener("click", function () {
    if (document.documentElement.hasAttribute("theme")) {
      document.documentElement.removeAttribute("theme");
      localStorage.removeItem("theme");
    } else {
      document.documentElement.setAttribute("theme", "dark");
      localStorage.setItem("theme", 1);
    }
  });
  if ("nonograms" in localStorage) {
    outputLastResults(JSON.parse(localStorage["nonograms"]));
  }

  soundSwitcher.addEventListener("click", switchSound);
});

export { leftSection };
