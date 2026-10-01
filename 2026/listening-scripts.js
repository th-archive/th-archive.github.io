const alphabet = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  specialCharacters: "",
};

let inset = "calc(min(100vw - 2em, 100dvh - 5em) - 4em";
const root = document.querySelector(":root");

const randomArr = [];
for (let i = 0; i < 20; i++) {
  randomArr.push(Math.random());
}
const text = [
  {
    title: "ABCD",
    artist: "Cosmic Boy, Chan, SHIRT",
    type: "Single",
    img: "https://i.scdn.co/image/ab67616d0000b273bddb2e39d633fb1b0eea7959",
  },
  {
    title: "Leave (Feat. JUNE, Chan, THAMA)",
    artist: "PATEKO",
    type: "Single",
    img: "https://i.scdn.co/image/ab67616d0000b27346bd4e319e6cbbd7aecbd1d1",
  },
  {
    title: "WHEN U TIPSY",
    artist: "TRADE L",
    type: "Album",
    img: "https://i.scdn.co/image/ab67616d0000b2736877876ef47475f3ba1f020f",
  },
  {
    title: "FaceTime",
    artist: "LNGSHOT",
    type: "Single",
    img: "https://i.scdn.co/image/ab67616d0000b2739ae175cd44e09688bb7c0f4f",
  },
  {
    title: "Really Like You",
    artist: "BABYMONSTER",
    type: "Single",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSommE5jsAdI5Vb-PfNFshIv2lzsvIdqZyeNSkXJ7ZH5A&s=10",
  },
  {
    title: "4SHOBOIZ MIXTAPE",
    artist: "LNGSHOT",
    type: "Album",
    img: "https://i.scdn.co/image/ab67616d0000b2735939de3b4b0d974c3bc791ff",
  },
  {
    title: "SORRY",
    artist: "SUMIN, Slom",
    type: "Single",
    img: "https://i.scdn.co/image/ab67616d0000b2736665fb2cd32c896e24fdde0c",
  },
  {
    title: "Catching Feelings",
    artist: "Justin Bieber",
    type: "Single",
    img: "https://i.scdn.co/image/ab67616d0000b273f1d02a6cec967f8b6b78f76e",
  },
  {
    title: "Too Close",
    artist: "ENHYPEN",
    type: "Single",
    img: "https://i.scdn.co/image/ab67616d0000b273708e8e2fec0e67fbc69f6f9c",
  },
  {
    title: "Mixed Feelings",
    artist: "Kelly is Green",
    type: "EP",
    img: "https://i.scdn.co/image/ab67616d0000b2736f54da61d3f68ec4424008e7",
  },
  {
    title: "Babydoll",
    artist: "Dominic Fike",
    type: "Single",
    img: "https://i.scdn.co/image/ab67616d0000b2737b1b6f41c1645af9757d5616",
  },
  {
    title: "Nobody’s Watching",
    artist: "ASTN",
    type: "Single",
    img: "https://i.scdn.co/image/ab67616d0000b273974f33c8af3cbc96f3868f8d",
  },
  {
    title: "Projeto Memoria Brasileira : Viva Garoto",
    artist: "Garoto",
    type: "Album",
    img: "https://i.scdn.co/image/ab67616d00001e0243913a36e8a7f7846297d858",
  },
  {
    title: "What Shall I Do",
    artist: "Hoody",
    type: "Single",
    img: "https://i.scdn.co/image/ab67616d0000b27394f370485a3272685dee7acc",
  },
  {
    title: "secrets 2-9: medley",
    artist: "Magdalena Bay",
    type: "Single",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUG3a915Fi-cwxphwvsL0HL7RYm8rfjUm_MArrSLcEdSEHpjwavggOvU8&s=10",
  },
  {
    title: "The Ballad of Matt & Mica",
    artist: "Magdalena Bay",
    type: "Single",
    img: "https://i.scdn.co/image/ab67616d00001e027339f7e95927d4b823189f62",
  },
  {
    title: "SWAG",
    artist: "Justin Bieber",
    type: "Album",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwsuR8SwL7W6UIFHG-_TSH_QsOQ0bRYC3ueLBZwL0uYw&s=10",
  },
  {
    title: "The Romantic",
    artist: "Bruno Mars",
    type: "Album",
    img: "https://i.scdn.co/image/ab67616d0000b2733eb8dc748f7efb1470f74395",
  },
  {
    title: "Got a Story to Tell",
    artist: "Thee Sacred Souls",
    type: "Album",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3HnAzitXqxzJ3AAy6-qUUfb-iZjTzX1G8P95qFx65mQ&s=10",
  },
  {
    title: "Thee Sacred Souls",
    artist: "Thee Sacred Souls",
    type: "Album",
    img: "https://i.scdn.co/image/ab67616d0000b2734bc05e5b1e506a6acea17148",
  },
  {
    title: "JOANG",
    artist: "Chan",
    type: "Single",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL8t8Ulfr3UsUUAvlf8YrtL6bjxJHyBWMTiUWg8nCnLg&s=10",
  },
  {
    title: "Wait! (feat. Chan)",
    artist: "Chilloop",
    type: "Single",
    img: "https://i.scdn.co/image/ab67616d0000b27320d53442f9dbfb5919bd6041",
  },
  {
    title: "signs",
    artist: "Giwon",
    type: "Single",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Nw8BG5Bv4yzJePJq1RPJmkbjm8-n9B4aJSPUKJYBfswvOjydQAQ8Fw-8&s=10",
  },
  {
    title: "What If We",
    artist: "seizetheday",
    type: "Single",
    img: "https://i.scdn.co/image/ab67616d0000b27329065727a39e1a4e86a49226",
  },
  {
    title: "With a Smile",
    artist: "Jae Woo AN",
    type: "Single",
    img: "https://i.scdn.co/image/ab67616d0000b2737684bfb3f655e6bbc408351c",
  },
  {
    title: "365",
    artist: "Kelly is Green",
    type: "Single",
    img: "https://i.scdn.co/image/ab67616d0000b273db41852e5822e4ffaaaf02ab",
  },
  {
    title: "Look At Me",
    artist: "James Savage",
    type: "Single",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0nomkZVg2W1BhpOUiZ2YQRxSW6MvQugJ7bKK7rhz36g&s=10",
  },
  {
    title: "Charge It To The Game",
    artist: "Karri",
    type: "Single",
    img: "https://i.scdn.co/image/ab67616d0000b27387919bb02333f75775187d08",
  },
  {
    title: "Make It Make Sense",
    artist: "Blaxian",
    type: "Album",
    img: "https://i.scdn.co/image/ab67616d0000b273d71c70395af7fecd44fae4e7",
  },
  {
    title: "칸예보다 너",
    artist: "Chan, Gist",
    type: "Single",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFJpP5E4vqzo3wbKCgou47PNJEWC8MDxqYEPCqpc_SMA&s=10",
  },
  {
    title: "Caffeine",
    artist: "Spratta, Keith Anthoni",
    type: "Single",
    img: "https://i.scdn.co/image/ab67616d0000b2739e073b811274c2b97d2b180a",
  },
  {
    title: "Till It’s Over",
    artist: "Titus Irons",
    type: "Single",
    img: "https://i.scdn.co/image/ab67616d00001e02d72bad7da1d93ab5548842ca",
  },
  {
    title: "Give Me Another Day",
    artist: "Jalen Ngonda",
    type: "Single",
    img: "https://i.scdn.co/image/ab67616d0000b273753a720a9845b697d8a120f6",
  },
  {
    title: "BABY CACTUS",
    artist: "TRADE L",
    type: "EP",
    img: "https://i.scdn.co/image/ab67616d0000b27399904ff72d784fbc1df9e5c2",
  },
  {
    title: "LOCKED IN",
    artist: "SAILORR",
    type: "Single",
    img: "https://i.scdn.co/image/ab67616d00001e022541ec72f984d6af3f6cd1dc",
  },
  {
    title: "니가있어",
    artist: "As One",
    type: "Single",
    img: "https://i.scdn.co/image/ab67616d00001e029c72dd14a9269f37c7aedbd7",
  },
  {
    title: "PATZ",
    artist: "PATEKO, SHIRT",
    type: "EP",
    img: "https://i.scdn.co/image/ab67616d0000b273a9d5b0fc20984e752a8f3a13",
  },
  {
    title: "The Silence That You Keep",
    artist: "Milton Wright",
    type: "Single",
    img: "https://i.scdn.co/image/ab67616d0000b2731e0c82e62ffb1e646f332173",
  },
  {
    title: "tell her",
    artist: "Yel",
    type: "Single",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4TIA_5_m3wp_t9UGMOQdQSbh2kTJ90sfBpmuv7xx33Q&s=10",
  },
  {
    title: "if i’m with you (feat. MINNIE)",
    artist: "george",
    type: "Single",
    img: "https://i.scdn.co/image/ab67616d0000b2733f6d50869641bbe211dd48d3",
  },
];

const loadAlphabet = () => {
  const lowercase = document.querySelector(".alphabet .lowercase");
  const uppercase = document.querySelector(".alphabet .uppercase");
  const numbers = document.querySelector(".alphabet .numbers");
  const specialCharacters = document.querySelector(
    ".alphabet .special-characters",
  );

  for (let i = 0; i < alphabet.lowercase.length; i++) {
    lowercase.innerHTML += `<span class="char">${alphabet.lowercase[i]}</span>`;
  }

  for (let i = 0; i < alphabet.uppercase.length; i++) {
    uppercase.innerHTML += `<span class="char">${alphabet.uppercase[i]}</span>`;
  }

  for (let i = 0; i < alphabet.numbers.length; i++) {
    numbers.innerHTML += `<span class="char">${alphabet.numbers[i]}</span>`;
  }

  for (let i = 0; i < alphabet.specialCharacters.length; i++) {
    specialCharacters.innerHTML += `<span class="char">${alphabet.specialCharacters[i]}</span>`;
  }
};

loadAlphabet();

const addRing = (ringIndex) => {
  const textContainer = document.querySelector(".text-container");
  const newRing = document.createElement("div");
  newRing.classList.add("ring");
  textContainer.appendChild(newRing);
  if (window.innerWidth <= 768) {
    newRing.style.width = `${inset} - 0.5em - ${ringIndex * 1.55}em)`;
    newRing.style.height = `${inset} - 0.5em - ${ringIndex * 1.55}em)`;
  } else {
    newRing.style.width = `${inset} - 0.75em - ${ringIndex * 1.85}em)`;
    newRing.style.height = `${inset} - 0.75em - ${ringIndex * 1.85}em)`;
  }

  return newRing;
};

const populateText = () => {
  const width = document
    .querySelector(".cd-img-container")
    .getBoundingClientRect().width;
  const charElt = document.querySelector(".alphabet .numbers .char");
  const charWidth = charElt.getBoundingClientRect().width;
  const em = parseFloat(window.getComputedStyle(charElt).fontSize);
  console.log("charWidth", charWidth);

  let circumference = Math.PI * width;
  let numChars = circumference / charWidth;
  console.log("numChars", numChars);
  let rot = 0;
  let space = 0;
  let ringIndex = 0;
  let rand = randomArr[ringIndex];

  let newRing = addRing(ringIndex);

  for (let i = 0; i < text.length; i++) {
    const textObj = text[i];
    let compiledText =
      " (" +
      (i + 1) +
      ")" +
      " " +
      textObj.title +
      " • " +
      textObj.artist +
      " • " +
      textObj.type +
      " ";

    if (window.innerWidth <= 576) {
      compiledText = " (" + (i + 1) + ")" + " " + textObj.title + " ";
    }
    compiledText = compiledText.replaceAll(" ", "\u00A0");
    compiledText += " ";

    if ((rot + compiledText.length) / numChars >= 1) {
      space += 1.25;
      rot = 0;
      circumference = 2 * Math.PI * (width * 0.5 - space * em - 0.5 * em);
      if (circumference < 0) {
        return;
      }

      numChars = circumference / charWidth;
      if (numChars < compiledText.length) {
        return;
      }
      ringIndex++;
      newRing = addRing(ringIndex);
      rand = randomArr[ringIndex];
    }

    for (let j = 0; j < compiledText.length; j++) {
      const newChar = document.createElement("p");

      newChar.textContent = compiledText[j];
      newChar.style.transform = `rotate(${-rot / numChars + rand}turn) translateY(calc(${width * 0.5}px - ${space}em - 0.5em)) `;
      rot += 1;

      newRing.appendChild(newChar);
      newChar.classList.add(`no-${i + 1}`);
      newChar.onmouseenter = function () {
        const sameNumberArr = document.getElementsByClassName(`no-${i + 1}`);
        for (let l = 0; l < sameNumberArr.length; l++) {
          sameNumberArr[l].classList.add("highlighted");
        }

        const miniTextContainer = document.querySelector(
          ".mini-text-container",
        );
        const miniTextNumber = document.querySelector(
          ".mini-text-container .number",
        );
        const miniTextTitle = document.querySelector(
          ".mini-text-container .title",
        );
        const miniTextArtistType = document.querySelector(
          ".mini-text-container .artist-type",
        );
        miniTextNumber.innerHTML = `<sup>( ${i + 1} )</sup>`;
        miniTextTitle.innerHTML = text[i].title;
        miniTextArtistType.innerHTML =
          "<sub>" + text[i].artist + " • " + text[i].type + "</sub>";

        miniTextContainer.classList.add("highlighted");
      };
      newChar.onmouseleave = function () {
        const sameNumberArr = document.getElementsByClassName(`no-${i + 1}`);
        for (let l = 0; l < sameNumberArr.length; l++) {
          sameNumberArr[l].classList.remove("highlighted");
        }

        const miniTextContainer = document.querySelector(
          ".mini-text-container",
        );
        miniTextContainer.classList.remove("highlighted");
      };
    }
  }

  // get circumference of each circle starting from outermost
  // divide by width of 1ch to get number of characters per ring
  // for each ring:
  //    for each character in compiledText:
  //        rotate character and push out by amt to get to ring

  if (window.innerWidth >= 768) {
    root.style.setProperty(
      "--hover-blocker-dim",
      `${inset} - 2.5em - ${ringIndex * 1.85}em)`,
    );
  } else {
    root.style.setProperty(
      "--hover-blocker-dim",
      `${inset} - 2em - ${ringIndex * 1.55}em)`,
    );
  }
};

populateText();

const populateImages = () => {
  const imgContainer = document.querySelector(".cd-img-container");

  for (let i = 0; i < text.length; i++) {
    const newImg = document.createElement("img");
    newImg.src = text[i].img;
    newImg.alt = text[i].title;
    newImg.classList.add(`no-${i + 1}`);
    imgContainer.appendChild(newImg);
  }
};

populateImages();

window.addEventListener("resize", () => {
  const textContainer = document.querySelector(".text-container");
  textContainer.replaceChildren();
  populateText();

  if (window.innerWidth <= 768) {
    inset = "calc(min(100vw - 2em, 100dvh - 5em) - 4em";
  } else {
    inset = "calc(min(100vw - 2em, 100dvh - 5em) - 4em";
  }

  if (window.innerWidth >= 768) {
    root.style.setProperty(
      "--hover-blocker-dim",
      `${inset} - 2em - ${ringIndex * 1.85}em)`,
    );
  } else {
    root.style.setProperty(
      "--hover-blocker-dim",
      `${inset} - 2em - ${ringIndex * 1.55}em)`,
    );
  }
});
