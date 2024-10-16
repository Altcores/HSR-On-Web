const characterStatsContainer = document.querySelector(".stats");
const characterStatsContainer2 = document.querySelector(".stats2");
const CharacterStats = [
  {
    name: "Argenti",
    stats: {
      health: 1047,
      attack: 737,
      defense: 363,
      speed: 103,
      critrate: 0.7,
      critdamage: 2.5,
      taunt: 75,
    },
  },
  {
    name: "Aventurine",
    stats: {
      health: 1203,
      attack: 655,
      defense: 446,
      speed: 106,
      critrate: 0.5,
      critdamage: 2.0,
      taunt: 150,
    },
  },
  {
    name: "Bailu",
    stats: {
      health: 1319,
      attack: 562,
      defense: 485,
      speed: 98,
      critrate: 0.5,
      critdamage: 2.0,
      taunt: 100,
    },
  },
  {
    name: "Bronya",
    stats: {
      health: 1241,
      attack: 582,
      defense: 533,
      speed: 99,
      critrate: 0.5,
      critdamage: 2.0,
      taunt: 100,
    },
  },
  {
    name: "Seele",
    stats: {
      health: 931,
      attack: 640,
      defense: 363,
      speed: 115,
      critrate: 0.7,
      critdamage: 2.5,
      taunt: 75,
    },
  },
  {
    name: "Sparkle",
    stats: {
      health: 1397,
      attack: 523,
      defense: 485,
      speed: 101,
      critrate: 0.5,
      critdamage: 2.0,
      taunt: 100,
    },
  },
  {
    name: "Huohuo",
    stats: {
      health: 1358,
      attack: 601,
      defense: 509,
      speed: 98,
      critrate: 0.4,
      critdamage: 2.0,
      taunt: 100,
    },
  },
  {
    name: "Welt",
    stats: {
      health: 1125,
      attack: 620,
      defense: 509,
      speed: 102,
      critrate: 0.7,
      critdamage: 2.5,
      taunt: 100,
    },
  },
  {
    name: "Pela",
    stats: {
      health: 987,
      attack: 546,
      defense: 463,
      speed: 105,
      critrate: 0.6,
      critdamage: 2.0,
      taunt: 100,
    },
  },
  {
    name: "Guinaifen",
    stats: {
      health: 882,
      attack: 582,
      defense: 441,
      speed: 106,
      critrate: 0.6,
      critdamage: 2.0,
      taunt: 100,
    },
  },
  {
    name: "Danheng",
    stats: {
      health: 882,
      attack: 546,
      defense: 396,
      speed: 110,
      critrate: 0.6,
      critdamage: 2.5,
      taunt: 75,
    },
  },
  {
    name: "March7th",
    stats: {
      health: 1058,
      attack: 511,
      defense: 573,
      speed: 101,
      critrate: 0.4,
      critdamage: 1.8,
      taunt: 150,
    },
  },
];
showCharacterStats(0);
function showCharacterStats(index) {
  CharacterStats.forEach((character, i) => {
    const characterDiv = document.createElement("div");
    const characterDiv2 = document.createElement("div"); //iki sakjane gak usah cuman yaudah
    characterDiv.innerHTML = "";
    characterDiv2.innerHTML = "";
    if (i === index) {
      characterDiv.innerHTML = `
        <h2>${character.name}</h2>
        <p>Health: ${character.stats.health}</p>
        <p>Attack: ${character.stats.attack}</p>
        <p>Defense: ${character.stats.defense}</p>
        <p>Speed: ${character.stats.speed}</p>`;
      characterDiv2.innerHTML = `
        <p>Crit Rate: ${character.stats.critrate}</p>
        <p>Crit Damage: ${character.stats.critdamage}</p>
        <p>Taunt: ${character.stats.taunt}</p>`;
      characterStatsContainer.innerHTML = characterDiv.innerHTML;
      characterStatsContainer2.innerHTML = characterDiv2.innerHTML;
      //if want generate without delete previous html just put += and delete if else
    }
  });
}
