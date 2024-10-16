const containAllContent = document.querySelector(".contain-all-content");

const content1 = document.querySelector(".content-1");
const namePlayer = document.querySelector(".name-player");
const inputName = document.querySelector(".input-name");
const buttonName = document.querySelector(".button-name");

const content2 = document.querySelector(".content-2");
const containBoxMenu = document.querySelector(".contain-box-menu");

const containBar = document.querySelector(".contain-bar");
const barName = document.querySelector(".bar-name");

const char = document.querySelectorAll(".char");
const charBanner = document.querySelectorAll(".char-banner");

const boxMenu = document.querySelectorAll(".box-menu");
const mainContentBox = document.querySelectorAll(".main-content-box");

const chooseEnemy = document.querySelector(".choose-enemy");
const enemyContain = document.querySelector(".enemy-contain");
const enemyFlex = document.querySelectorAll(".enemy-flex");
const enemySection1 = document.querySelector(".enemy-section1");
const enemySection2 = document.querySelector(".enemy-section2");
const H1Enemy = document.querySelector(".H1-Enemy");

const prepareContain = document.querySelector(".contain-prepare");
const charS = document.querySelectorAll(".char-s");
const charaSelected = document.querySelector(".chara-selected");

const images = document.querySelectorAll("img");
images.forEach((image) => {
  image.addEventListener("load", function () {
    this.setAttribute("loading", "lazy");
  });
});
