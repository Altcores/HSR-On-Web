const containAbjad = [
  ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)), // A-Z
  ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i)), // a-z
  ...Array.from({ length: 10 }, (_, i) => i.toString()), // 0-9
  " ",
  "-",
  "_",
];

let absoluteNamePlayer = "";
namePlayer.innerHTML = "";

function inputKeyHandler(event) {
  let keyEvent = event.key;

  if (keyEvent === "Backspace") {
    namePlayer.innerHTML = namePlayer.innerHTML.slice(0, -1);
  }

  if (containAbjad.includes(keyEvent)) {
    namePlayer.innerHTML += keyEvent;
  }

  if (namePlayer.innerHTML.length > 15) {
    namePlayer.innerHTML = namePlayer.innerHTML.slice(0, 15);
  }

  if (namePlayer.innerHTML === "") {
    buttonName.disabled = true;
    buttonName.style.visibility = "hidden";
  } else {
    buttonName.disabled = false;
    buttonName.style.visibility = "visible";
    if (keyEvent === "Enter") {
      Start();
    }
  }
  absoluteNamePlayer = namePlayer.innerHTML;
}

function Start() {
  content1.style.opacity = "0%";
  content1.style.top = "40px";
  content1.style.visibility = "hidden";
  barName.innerHTML = absoluteNamePlayer;
  setTimeout(() => {
    content1.style.display = "none";
    content2.style.opacity = "100%";
    content2.style.display = "flex";
  }, 500);

  setTimeout(() => {
    containBoxMenu.style.right = "0px";
    containBar.style.bottom = "0px";
  }, 520);
}

char.forEach((chars, index) => {
  if ([0].includes(index)) {
    chars.classList.add("char-on");
  }
  chars.addEventListener("click", () => {
    resetChar();
    chars.classList.add("char-on");
    showCharBanner(index);
    showCharacterStats(index);
  });
});

function resetChar() {
  char.forEach((chars) => {
    chars.classList.remove("char-on");
  });
}

showCharBanner(0);
function showCharBanner(index) {
  charBanner.forEach((e, i) => {
    e.style.opacity = "0%";
    e.style.left = "300px";
    if (i === index) {
      e.style.opacity = "100%";
      e.style.left = "30px";
    }
  });
}

let currentIndexforBoxMenu = 0;

boxMenu.forEach((e, i) => {
  if ([0].includes(i)) {
    e.classList.add("box-menu-active");
  }
  e.addEventListener("click", () => {
    boxMenu.forEach((e) => {
      e.classList.remove("box-menu-active");
    });
    e.classList.add("box-menu-active");
    showMainContentBox(i);
  });
});
showMainContentBox(0);
function showMainContentBox(index) {
  mainContentBox.forEach((e, i) => {
    e.style.opacity = "0";
    e.style.visibility = "hidden";
    if (i === index) {
      e.style.visibility = "visible";
      e.style.opacity = "1";
    }
  });
}

function sMCB(e, i) {
  if (i === 0) {
    mainContentBox[0].style.bottom = "0px";
    mainContentBox[1].style.bottom = "-44.1rem";
    mainContentBox[2].style.bottom = "-88.2rem";
  } else if (i === 1) {
    mainContentBox[0].style.bottom = "44.1rem";
    mainContentBox[1].style.bottom = "0px";
    mainContentBox[2].style.bottom = "-44.1rem";
  } else if (i === 2) {
    mainContentBox[0].style.bottom = "88.2rem";
    mainContentBox[1].style.bottom = "44.1rem";
    mainContentBox[2].style.bottom = "0px";
  }
}

const dataSelected = {
  0: "<img src=' img/CharaIcon/Character_Sparkle_Icon.webp'/>",
  1: "<img src=' img/CharaIcon/Character_Pela_Icon.webp'/>",
  2: "<img src=' img/CharaIcon/Character_Guinaifen_Icon.webp'/>",
  3: "<img src=' img/CharaIcon/Character_Dan_Heng_Icon.webp'/>",
  4: "<img src=' img/CharaIcon/Character_March_7th_Icon.webp'/>",
};

//Untuk Border Character/Stroke Maksimal 4
let activeChar = [];
charS.forEach((charselect, index) => {
  charselect.addEventListener("click", () => {
    //console.log(index);
    //semisal ada active char mempunyai index
    if (activeChar.includes(index)) {
      charselect.classList.remove("char-on");
      activeChar = activeChar.filter((x) => x !== index);
      //penggunaan filter untuk menghilangkan index yg di pencet lagi biar gak ke save dalam array
      //  console.log("Deactive");
    } else if (activeChar.length < 4) {
      charselect.classList.add("char-on");
      activeChar.push(index);

      // console.log("Active");
    }
    showCharSelected(index);
  });

  /* if ([0].includes(index)) {
        button.classList.add("active");
        activeButtons.push(index);
      }*/
  return index;
});

//Untuk Menunjukkan Yang Terpilih
let counterImg = [];
function showCharSelected(index) {
  if (counterImg.includes(index)) {
    counterImg = counterImg.filter((x) => x !== index);
  } else if (counterImg.length < 4) {
    counterImg.push(index);
    //if (!counterImg.includes(index)) {
    //  counterImg.push(index);
    //}
  }

  //counterImg otomatis undfined karena mengambil data yg belum ada
  const images = [
    { selector: ".img1", counter: counterImg[0] },
    { selector: ".img2", counter: counterImg[1] },
    { selector: ".img3", counter: counterImg[2] },
    { selector: ".img4", counter: counterImg[3] },
  ];

  //Cek semua images
  images.forEach((image) => {
    const img = document.querySelector(image.selector);
    //cukup image.counter sebenarnya sudah bekerja
    if (dataSelected[image.counter] === undefined) {
      img.style.visibility = "hidden";
      img.style.opacity = "0";
    } else {
      img.style.visibility = "visible";
      img.style.opacity = "1";
      img.innerHTML = dataSelected[image.counter];
    }
    //console.log(counterImg);
    //console.log(image);
  });
  /*
  let img1 = document.querySelector(".img1");
  let img2 = document.querySelector(".img2");
  let img3 = document.querySelector(".img3");
  let img4 = document.querySelector(".img4");

  let imgCounter1 = [counterImg[0]];
  let imgCounter2 = [counterImg[1]];
  let imgCounter3 = [counterImg[2]];
  let imgCounter4 = [counterImg[3]];

  if (dataSelected[imgCounter1] === undefined) {
    img1.style.visibility = "hidden";
    img1.style.opacity = "0";
  } else {
    img1.style.visibility = "visible";
    img1.style.opacity = "1";
  }

  if (dataSelected[imgCounter2] === undefined) {
    img2.style.visibility = "hidden";
    img2.style.opacity = "0";
  } else {
    img2.style.visibility = "visible";
    img2.style.opacity = "1";
  }

  if (dataSelected[imgCounter3] === undefined) {
    img3.style.visibility = "hidden";
    img3.style.opacity = "0";
  } else {
    img3.style.visibility = "visible";
    img3.style.opacity = "1";
  }

  if (dataSelected[imgCounter4] === undefined) {
    img4.style.visibility = "hidden";
    img4.style.opacity = "0";
  } else {
    img4.style.visibility = "visible";
    img4.style.opacity = "1";
  }
  img1.innerHTML = dataSelected[imgCounter1];
  img2.innerHTML = dataSelected[imgCounter2];
  img3.innerHTML = dataSelected[imgCounter3];
  img4.innerHTML = dataSelected[imgCounter4];
  */
}
