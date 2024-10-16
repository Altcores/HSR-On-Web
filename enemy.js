const enemyEliteStats = [
  {
    name: "Voidranger: Trampler",
    type: "Elite",
    stats: {
      level_40: {
        level: 40,
        stats: { health: 9744, attack: 155, deffense: 600, speed: 100 },
      },
      level_50: {
        level: 50,
        stats: { health: 22649, attack: 235, deffense: 700, speed: 100 },
      },
    },
  },
  {
    name: "Automaton Direwolf",
    type: "Elite",
    stats: {
      level_40: {
        level: 40,
        stats: { health: 9744, attack: 155, deffense: 600, speed: 144 },
      },
      level_50: {
        level: 50,
        stats: { health: 22649, attack: 235, deffense: 700, speed: 144 },
      },
    },
  },
  {
    name: "Ice Out of Space",
    type: "Elite",
    stats: {
      level_40: {
        level: 40,
        stats: { health: 8848, attack: 155, deffense: 600, speed: 100 },
      },
      level_50: {
        level: 50,
        stats: { health: 20590, attack: 234, deffense: 700, speed: 100 },
      },
    },
  },
  {
    name: "The Ascended",
    type: "Elite",
    stats: {
      level_40: {
        level: 40,
        stats: { health: 9744, attack: 155, deffense: 600, speed: 120 },
      },
      level_50: {
        level: 50,
        stats: { health: 22649, attack: 234, deffense: 700, speed: 120 },
      },
    },
  },
];

const enemyStats = [
  {
    name: "Voidranger: Reaver",
    type: "Normal",
    stats: {
      level_40: {
        level: 40,
        stats: { health: 1329, attack: 155, deffense: 600, speed: 100 },
      },
      level_50: {
        level: 50,
        stats: { health: 3089, attack: 234, deffense: 700, speed: 100 },
      },
    },
  },
  {
    name: "Entranced Ingenium: Illumination Dragonfish",
    type: "Normal",
    stats: {
      level_40: {
        level: 40,
        stats: { health: 1329, attack: 155, deffense: 600, speed: 100 },
      },
      level_50: {
        level: 50,
        stats: { health: 3089, attack: 234, deffense: 700, speed: 100 },
      },
    },
  },
  {
    name: "Antibaryon",
    type: "Normal",
    stats: {
      level_40: {
        level: 40,
        stats: { health: 531, attack: 155, deffense: 600, speed: 83 },
      },
      level_50: {
        level: 50,
        stats: { health: 1235, attack: 234, deffense: 700, speed: 83 },
      },
    },
  },
  {
    name: "Windspawn",
    type: "Normal",
    stats: {
      level_40: {
        level: 40,
        stats: { health: 531, attack: 155, deffense: 600, speed: 83 },
      },
      level_50: {
        level: 50,
        stats: { health: 1235, attack: 234, deffense: 700, speed: 83 },
      },
    },
  },
  {
    name: "Silvermane Soldier",
    type: "Normal",
    stats: {
      level_40: {
        level: 40,
        stats: { health: 1152, attack: 155, deffense: 600, speed: 83 },
      },
      level_50: {
        level: 50,
        stats: { health: 2677, attack: 234, deffense: 700, speed: 83 },
      },
    },
  },
  {
    name: "Vagrant",
    type: "Normal",
    stats: {
      level_40: {
        level: 40,
        stats: { health: 1329, attack: 155, deffense: 600, speed: 100 },
      },
      level_50: {
        level: 50,
        stats: { health: 3089, attack: 234, deffense: 700, speed: 100 },
      },
    },
  },
];
/*
let enm1 = document.querySelector(".enm1");
let enm2 = document.querySelector(".enm2");
let enm3 = document.querySelector(".enm3");
let enm4 = document.querySelector(".enm4");

function battleStart(e, index) {
  if (index === 0) {
    enm1.innerHTML =
      "<img src='img/EnemyIcon/Icon_Enemy_Automaton_Direwolf.webp' />";
    enm2.innerHTML =
      "<img src='img/EnemyIcon/Icon_Enemy_Voidranger_Trampler.webp' />";
    enm3.innerHTML = "<img src='img/EnemyIcon/Icon_Enemy_The_Ascended.webp' />";
    enm4.innerHTML =
      "<img src='img/EnemyIcon/Icon_Enemy_Ice_Out_of_Space.webp' />";
    prepareContain.style.zIndex = "2";
    chooseEnemy.style.zIndex = "1";
  }

  if (index === 1) {
    enm1.innerHTML =
      "<img src='img/EnemyIcon/Icon_Enemy_Voidranger_Trampler.webp' />";
    enm2.innerHTML = "<img src='img/EnemyIcon/Icon_Enemy_The_Ascended.webp' />";
    enm3.innerHTML =
      "<img src='img/EnemyIcon/Icon_Enemy_Voidranger_Reaver.webp' />";
    enm4.innerHTML =
      "<img src='img/EnemyIcon/Icon_Enemy_Voidranger_Reaver.webp' />";
    prepareContain.style.zIndex = "2";
    chooseEnemy.style.zIndex = "1";
  }

  if (index === 2) {
    enm1.innerHTML =
      "<img src='img/EnemyIcon/Icon_Enemy_Automaton_Direwolf.webp' />";
    enm2.innerHTML =
      "<img src='img/EnemyIcon/Icon_Enemy_Silvermane_Soldier.webp' />";
    enm3.innerHTML =
      "<img src='img/EnemyIcon/Icon_Enemy_Silvermane_Soldier.webp' />";
    enm4.innerHTML =
      "<img src='img/EnemyIcon/Icon_Enemy_Silvermane_Soldier.webp' />";
    prepareContain.style.zIndex = "2";
    chooseEnemy.style.zIndex = "1";
  }
  if (index === 3) {
    enm1.innerHTML =
      "<img src='img/EnemyIcon/Icon_Enemy_Entranced_Ingenium_Illumination_Dragonfish.webp' />";
    enm2.innerHTML =
      "<img src='img/EnemyIcon/Icon_Enemy_Entranced_Ingenium_Illumination_Dragonfish.webp' />";
    enm3.innerHTML =
      "<img src='img/EnemyIcon/Icon_Enemy_Entranced_Ingenium_Illumination_Dragonfish.webp' />";
    enm4.innerHTML =
      "<img src='img/EnemyIcon/Icon_Enemy_Entranced_Ingenium_Illumination_Dragonfish.webp' />";
    prepareContain.style.zIndex = "2";
    chooseEnemy.style.zIndex = "1";
  }
  if (index === 4) {
    enm1.innerHTML = "<img src='img/EnemyIcon/Icon_Enemy_Baryon.webp' />";
    enm2.innerHTML = "<img src='img/EnemyIcon/Icon_Enemy_Baryon.webp' />";
    enm3.innerHTML = "<img src='img/EnemyIcon/Icon_Enemy_Windspawn.webp' />";
    enm4.innerHTML = "<img src='img/EnemyIcon/Icon_Enemy_Windspawn.webp' />";
    prepareContain.style.zIndex = "2";
    chooseEnemy.style.zIndex = "1";
  }
  if (index === 5) {
    enm1.innerHTML =
      "<img src='img/EnemyIcon/Icon_Enemy_Silvermane_Soldier.webp' />";
    enm2.innerHTML =
      "<img src='img/EnemyIcon/Icon_Enemy_Voidranger_Reaver.webp' />";
    enm3.innerHTML = "<img src='img/EnemyIcon/Icon_Enemy_Vagrant.webp' />";
    enm4.innerHTML = "<img src='img/EnemyIcon/Icon_Enemy_Vagrant.webp' />";
    prepareContain.style.zIndex = "2";
    chooseEnemy.style.zIndex = "1";
  }
}*/
