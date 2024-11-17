import { setIsShownSol } from "./functions.js";
import {
  getGame,
  resetTimer,
  outputLastResults,
  switchSound,
} from "./main-functions.js";

const sizeSection = document.addEventListener("DOMContentLoaded", () => {
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
  const main = document.querySelector("main");
  const centerS = document.querySelector(".center-s");
  const nonogramSizes = document.createElement("section");

  const applicationName = document.createElement("h1");
  const size = document.createElement("div");
  const randomBtn = document.createElement("button");
  let prevGameName = '';

  applicationName.classList = "application-name";
  nonogramSizes.classList = "nonogram-sizes";
  size.classList = "size";
  randomBtn.classList = "dropbtn randombtn";
centerS.prepend(nonogramSizes);
  centerS.prepend(applicationName);

  // nonogramSizes.append(applicationName);
  nonogramSizes.append(size);
  size.append(randomBtn);

  applicationName.innerHTML = 'Nonograms';
  randomBtn.innerHTML = "Random";
  createDropdown(nonogramSizes, size);

  //right section
  const rightS = document.createElement("section");
  const theme = document.createElement("div");
  const soundSwitcher = document.createElement("div");
  const themeSwitcher = document.createElement("button");
  const statistics = document.createElement("button");
  const resultsModal = document.createElement("div");
  const savedResults = document.createElement("div");
  const headOfSaveResults = document.createElement("h2");
  const listOfBestResults = document.createElement("ol");

  rightS.classList = "right-s";
  theme.classList = "theme-and-sound";
  soundSwitcher.classList = "sound-switcher";
  themeSwitcher.classList = "theme-switcher";
  statistics.classList = "statistics";
  resultsModal.classList = 'modal-results';
  savedResults.classList = "saved-results";

  main.append(rightS);
  rightS.append(soundSwitcher);
  rightS.append(theme);
  theme.append(soundSwitcher);
  theme.append(themeSwitcher);
  rightS.append(statistics);
  rightS.append(resultsModal);
  resultsModal.append(savedResults);
  savedResults.append(headOfSaveResults);
  savedResults.append(listOfBestResults);

  themeSwitcher.innerHTML = "Theme";
  statistics.innerHTML = "Statistics";


  for (let i = 0; i < 10; i += 1) {
    const savedResult = document.createElement("li");
    listOfBestResults.append(savedResult);
    savedResult.classList = "saved-res";
  }
  headOfSaveResults.innerHTML = "The latest 5 win results";

  const dropDownContent = document.querySelectorAll(".dropdown-content");
  dropDownContent.forEach((dropDown) => {
    dropDown.addEventListener("click", (e) => {

      const target = e.target;

      if (target.hasAttribute("href")) {
        if (prevGameName) prevGameName?.classList.remove('selected');
         prevGameName = target;
        target.classList.add("selected");
        prevTemplate = target.innerHTML;
        getGame(target.innerHTML.toLowerCase());
        resetTimer(1);
        setIsShownSol();
      }
    });
  });
  function createDropdown() {
    for (let i = 0; i < 3; i += 1) {
      const dropdown = document.createElement("div");
      dropdown.classList = "size_dropdown";
      const five = `<div class='dropdown-content'>
    <span href='#'>Airplane</span>
    <span href='#'>Hourglass</span>
    <span href='#'>Heart</span>
    <span href='#'>Five</span>
    <span href='#'>Dog</span>
    </div>`;
      const ten = `<div class='dropdown-content'>
    <span href='#'>Kettle</span>
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

  function showSavedBestResults () {
    resultsModal.classList.add('modal-results__active');
  }

  function closeResultsModal() {
    resultsModal.classList.remove('modal-results__active');
  }

  randomBtn.addEventListener("click", chooseRandomTemplate);
  themeSwitcher.addEventListener("click", function () {
    console.log(document.documentElement);
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
  statistics.addEventListener('click', showSavedBestResults);
  resultsModal.addEventListener('click',closeResultsModal);
});

export { sizeSection };
