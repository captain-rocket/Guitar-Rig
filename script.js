// Web app data
const rigs = {
  blues: {
    guitar: {
      guitarName: "Stratocaster",
      imgFile: "./images/blues/strat.png",
    },
    amp: {
      ampName: "Fender Deluxe",
      imgFile: "./images/blues/fender-dlx.png",
    },
    pedals: {
      pedal1: {
        pedalName: "Fuzz Face",
        imgFile: "./images/blues/FuzzFace.png",
      },
      pedal2: {
        pedalName: "TS808",
        imgFile: "./images/blues/ts808.png",
      },
      pedal3: {
        pedalName: "Strymon Lex",
        imgFile: "./images/blues/Strymon-Lex.png",
      },
    },
  },
  jazz: {
    guitar: {
      guitarName: "JazzMaster",
      imgFile: "./images/jazz/gibson-es-175.png",
    },
    amp: {
      ampName: "Fender Deluxe",
      imgFile: "./images/jazz/princeton.png",
    },
    pedals: {
      pedal1: {
        pedalName: "Ernie Ball MPV",
        imgFile: "./images/jazz/eb-mpv.png",
      },
      pedal2: {
        pedalName: "RAT",
        imgFile: "./images/jazz/rat.png",
      },
      pedal3: {
        pedalName: "DL4 Delay",
        imgFile: "./images/jazz/DL4Modeler.png",
      },
      pedal4: {
        pedalName: "Freeze",
        imgFile: "./images/jazz/ehfreeze-xl.png",
      },
    },
  },
  country: {
    guitar: {
      guitarName: "Telecaster",
      imgFile: "./images/country/telecaster.png",
    },
    amp: {
      ampName: "Fender Twin",
      imgFile: "./images/country/fender-twin.png",
    },
    pedals: {
      pedal1: {
        pedalName: "EGO",
        imgFile: "./images/country/ego.png",
      },
      pedal2: {
        pedalName: "Timmy",
        imgFile: "./images/country/Timmy.png",
      },
      pedal3: {
        pedalName: "Carbon Copy",
        imgFile: "./images/country/mxr-cc.png",
      },
    },
  },
  rock: {
    guitar: {
      guitarName: "Les Paul",
      imgFile: "./images/rock/les-paul.png",
    },
    amp: {
      ampName: "Marshall 1959",
      imgFile: "./images/rock/marshall-1959.png",
    },
    cab: {
      cabName: "1960A",
      imgFile: "./images/rock/1960a.png",
    },
    pedals: {
      pedal1: {
        pedalName: "Boss SD-1",
        imgFile: "./images/rock/boss-sd-1.png",
      },
      pedal2: {
        pedalName: "Phaze 90",
        imgFile: "./images/rock/mxr-pz-90.png",
      },
      pedal3: {
        pedalName: "Minifooger Chorus",
        imgFile: "./images/rock/Minifooger-Chorus.png",
      },
      pedal4: {
        pedalName: "Boss Delay",
        imgFile: "./images/rock/boss-dm-2w.png",
      },
    },
  },
  metal: {
    guitar: {
      guitarName: "Majesty",
      imgFile: "./images/metal/majesty.png",
    },
    amp: {
      ampName: "Mesa Boggie JP",
      imgFile: "./images/metal/mesa-boogie-jp.png",
    },
    cab: {
      cabName: "Messa Cab",
      imgFile: "./images/metal/Mesa-cab.png",
    },
    pedals: {
      pedal1: {
        pedalName: "Ernie Ball MPV",
        imgFile: "./images/metal/eb-mpv.png",
      },
      pedal2: {
        pedalName: "FullTone OCD",
        imgFile: "./images/metal/fulltone-ocd.png",
      },
      pedal3: {
        pedalName: "Plethora",
        imgFile: "./images/metal/plethora.png",
      },
      pedal4: {
        pedalName: "H9 Dark",
        imgFile: "./images/metal/e-h9-dark.png",
      },
      pedal5: {
        pedalName: "ISP Decimator",
        imgFile: "./images/metal/isp-decimator.png",
      },
    },
  },
  modernMetal: {
    guitar: {
      guitarName: "Ibanez",
      imgFile: "./images/modern-metal/ibanez.png",
    },
    amp: {
      ampName: "Peavy Invective",
      imgFile: "./images/modern-metal/peavey-invective.png",
    },
    cab: {
      cabName: "Peavey Cab",
      imgFile: "./images/modern-metal/peavey-cab.png",
    },
    pedals: {
      pedal1: {
        pedalName: "Ernie Ball MPV",
        imgFile: "./images/metal/eb-mpv.png",
      },
      pedal2: {
        pedalName: "Metal Zone MT-2",
        imgFile: "./images/modern-metal/boss-mt-2.png",
      },
      pedal3: {
        pedalName: "Plethora",
        imgFile: "./images/metal/plethora.png",
      },
      pedal4: {
        pedalName: "H9 Dark",
        imgFile: "./images/metal/e-h9-dark.png",
      },
      pedal5: {
        pedalName: "Mimiq Doubler",
        imgFile: "./images/modern-metal/mimiq-doubler.png",
      },
      pedal6: {
        pedalName: "Boss Supperser NS-2",
        imgFile: "./images/modern-metal/boss-ns2.png",
      },
    },
  }, 
    pop: {
    guitar: {
      guitarName: "Star",
      imgFile: "./images/pop/star.png",
    },
    pedals: {
      pedal1: {
        pedalName: "Ernie Ball MPV",
        imgFile: "./images/pop/eb-mpv.png",
      },
      pedal2: {
        pedalName: "Axe FX III",
        imgFile: "./images/pop/axe-fx-iii.png",
      },
      pedal4: {
        pedalName: "H9 Dark",
        imgFile: "./images/pop/e-h9-dark.png",
      },
    },
  },
};

// DOM varibles
const nav = document.getElementById("nav");
const guitarEle = document.querySelector("#guitar");
const ampEle = document.querySelector("#amp");
const cabEle = document.querySelector("#cab");
const pedalsEle = document.querySelector("#pedals");

// Searches object to retrieve values
const recursiveSearch = (obj, searchKey, results = []) => {
  const r = results;
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (key === searchKey && typeof value !== "object") {
      r.push(value);
    } else if (typeof value === "object") {
      recursiveSearch(value, searchKey, r);
    }
  });
  return r;
};

// Nav event gets genre name from nav menu and runs correlating genre rig function.
const guitarRig = (e) => {
  const genre = e.target.id;
  const rig = rigs[genre];
    switch (genre) {
      case "blues":        
        removeRig();
        loadRig(rig);
        break;
      case "jazz":
        removeRig();
        loadRig(rig);
        break;
      case "country":
        removeRig();
        loadRig(rig);
        break;
      case "rock":
        removeRig();
        loadRig(rig);
        break;
      case "metal":
        removeRig();
        loadRig(rig);
        break;
      case "modernMetal":
        removeRig();
        loadRig(rig);
        break;
      case "pop":
        removeRig();
        loadRig(rig);
        break;
      default:
        break;
  }
};

// Removes child nodes of parent
const removeAllChildNodes = (parent) => {
  while (parent.firstChild){
    parent.removeChild(parent.firstChild);
  }
}

// If elements are loaded to the DOM removes them
const removeRig = () => {
  const genreChildren = true;
  switch (genreChildren) {
    case guitarEle.hasChildNodes():
      removeAllChildNodes(guitarEle);
    case ampEle.hasChildNodes():
      removeAllChildNodes(ampEle);
    case cabEle.hasChildNodes():
      removeAllChildNodes(cabEle);
    case pedalsEle.hasChildNodes():
      removeAllChildNodes(pedalsEle);
      break;
    default:
      break;
  }
}

// Checks if property is present. If property is present runs the fucntion to load the values.
const loadRig = ({ rig, guitar, amp, pedals, cab }) => {
  loadGuitar(guitar);
    if (rig??amp) {
      loadAmp(amp);
    }
    if (rig??cab) {
      loadCab(cab);
    }
    if (rig??pedals) {
      loadPedals(pedals);
    }
}    
//  Adds guitar elements to the DOM
const loadGuitar = ({ guitarName, imgFile }) => {
  const guitarNameEle = document.createElement("p");
  guitarNameEle.textContent = guitarName;
  guitarEle.appendChild(guitarNameEle);
  const guitarImg = document.createElement("img");
  guitarImg.src = imgFile;
  guitarEle.appendChild(guitarImg);
}

//  Adds amp elements to the DOM
const loadAmp = ({ ampName, imgFile }) => {
  const ampNameEle = document.createElement("p");
  ampNameEle.textContent = ampName;
  ampEle.appendChild(ampNameEle);
    const ampImg = document.createElement("img");
    ampImg.src = imgFile;
    ampEle.appendChild(ampImg);
}

//  Adds cab elements to the DOM
const loadCab = ({ cabName, imgFile }) => {
  const cabNameEle = document.createElement("p");
  cabNameEle.textContent = cabName;
  cabEle.appendChild(cabNameEle);
  const cabImg = document.createElement("img");
  cabImg.src = imgFile;
  cabEle.appendChild(cabImg);
}

//  Adds pedal elements to the DOM
const loadPedal = (namePedalsArray, imgPedalsArray) => {
  namePedalsArray.forEach((name, index) => {
    const path = imgPedalsArray[index];
    pedalName = name
    const pedalDiv = document.createElement("div")
    pedalDiv.setAttribute("id", name);
    pedalDiv.setAttribute("class", "pedal");
    pedalsEle.appendChild(pedalDiv);
    pedalDiv.textContent = pedalName;
    const pedalImg = document.createElement("img");
    pedalImg.src = path;
    pedalDiv.appendChild(pedalImg);
});
}

// Calls recursiveSearch function to retrieve pedal values
const loadPedals = (pedals) => {
  namePedalsArray = recursiveSearch(pedals, "pedalName");
  imgPedalsArray = recursiveSearch(pedals, "imgFile");
  loadPedal(namePedalsArray, imgPedalsArray);
}
// Nav menu event listener
nav.addEventListener("click", guitarRig);
