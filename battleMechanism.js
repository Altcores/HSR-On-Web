function backToEnemySelection() {
  chooseEnemy.style.visibility = "visible";
  chooseEnemy.style.opacity = "1";
  chooseEnemy.style.zIndex = "2";
  enemySection1.style.right = "0px";
  enemySection2.style.left = "0px";
  prepareContain.style.visibility = "hidden";
  prepareContain.style.opacity = "0";
  prepareContain.style.zIndex = "1";
  charaSelected.style.visibility = "hidden";
}

enemyFlex.forEach((enemy) => {
  enemy.addEventListener("click", () => {
    chooseEnemy.style.visibility = "hidden";
    chooseEnemy.style.opacity = "0";
    enemySection1.style.right = "300px";
    enemySection2.style.left = "300px";
    prepareContain.style.visibility = "visible";
    prepareContain.style.opacity = "1";
    charaSelected.style.visibility = "visible";
  });
});
function battleStart(e, index) {
  const enemyIcons = [
    [
      "Icon_Enemy_Automaton_Direwolf.webp",
      "Icon_Enemy_Voidranger_Trampler.webp",
      "Icon_Enemy_The_Ascended.webp",
      "Icon_Enemy_Ice_Out_of_Space.webp",
    ],
    [
      "Icon_Enemy_Voidranger_Trampler.webp",
      "Icon_Enemy_The_Ascended.webp",
      "Icon_Enemy_Voidranger_Reaver.webp",
      "Icon_Enemy_Voidranger_Reaver.webp",
    ],
    [
      "Icon_Enemy_Automaton_Direwolf.webp",
      "Icon_Enemy_Silvermane_Soldier.webp",
      "Icon_Enemy_Silvermane_Soldier.webp",
      "Icon_Enemy_Silvermane_Soldier.webp",
    ],
    [
      "Icon_Enemy_Entranced_Ingenium_Illumination_Dragonfish.webp",
      "Icon_Enemy_Entranced_Ingenium_Illumination_Dragonfish.webp",
      "Icon_Enemy_Entranced_Ingenium_Illumination_Dragonfish.webp",
      "Icon_Enemy_Entranced_Ingenium_Illumination_Dragonfish.webp",
    ],
    [
      "Icon_Enemy_Baryon.webp",
      "Icon_Enemy_Baryon.webp",
      "Icon_Enemy_Windspawn.webp",
      "Icon_Enemy_Windspawn.webp",
    ],
    [
      "Icon_Enemy_Silvermane_Soldier.webp",
      "Icon_Enemy_Voidranger_Reaver.webp",
      "Icon_Enemy_Vagrant.webp",
      "Icon_Enemy_Vagrant.webp",
    ],
  ];

  const enemyIconBasePath = "img/EnemyIcon/";

  enemyIcons[index].forEach((icon, i) => {
    const enemy = document.querySelector(`.enm${i + 1}`);
    enemy.innerHTML = `<img src="${enemyIconBasePath}${icon}" />`;
  });

  prepareContain.style.zIndex = "2";
  chooseEnemy.style.zIndex = "1";
}
