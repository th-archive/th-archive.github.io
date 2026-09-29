const alphabet = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  specialCharacters: "",
};
const text = [
  {
    title: "CHROMAKOPIA",
    artist: "Tyler, the Creator",
    type: "Album",
  },
  {
    title: "CHROMAKOPIA",
    artist: "Tyler, the Creator",
    type: "Album",
  },
  {
    title: "CHROMAKOPIA",
    artist: "Tyler, the Creator",
    type: "Album",
  },
  {
    title: "CHROMAKOPIA",
    artist: "Tyler, the Creator",
    type: "Album",
  },
  {
    title: "CHROMAKOPIA",
    artist: "Tyler, the Creator",
    type: "Album",
  },
  {
    title: "CHROMAKOPIA",
    artist: "Tyler, the Creator",
    type: "Album",
  },
  {
    title: "CHROMAKOPIA",
    artist: "Tyler, the Creator",
    type: "Album",
  },
  {
    title: "CHROMAKOPIA",
    artist: "Tyler, the Creator",
    type: "Album",
  },
  {
    title: "CHROMAKOPIA",
    artist: "Tyler, the Creator",
    type: "Album",
  },
  {
    title: "CHROMAKOPIA",
    artist: "Tyler, the Creator",
    type: "Album",
  },
  {
    title: "CHROMAKOPIA",
    artist: "Tyler, the Creator",
    type: "Album",
  },
  {
    title: "CHROMAKOPIA",
    artist: "Tyler, the Creator",
    type: "Album",
  },
  {
    title: "CHROMAKOPIA",
    artist: "Tyler, the Creator",
    type: "Album",
  },
  {
    title: "CHROMAKOPIA",
    artist: "Tyler, the Creator",
    type: "Album",
  },
  {
    title: "CHROMAKOPIA",
    artist: "Tyler, the Creator",
    type: "Album",
  },
  {
    title: "CHROMAKOPIA",
    artist: "Tyler, the Creator",
    type: "Album",
  },
  {
    title: "CHROMAKOPIA",
    artist: "Tyler, the Creator",
    type: "Album",
  },
  {
    title: "CHROMAKOPIA",
    artist: "Tyler, the Creator",
    type: "Album",
  },
  {
    title: "CHROMAKOPIA",
    artist: "Tyler, the Creator",
    type: "Album",
  },
  {
    title: "CHROMAKOPIA",
    artist: "Tyler, the Creator",
    type: "Album",
  },
  {
    title: "CHROMAKOPIA",
    artist: "Tyler, the Creator",
    type: "Album",
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

const populateText = () => {
  const textContainer = document.querySelector(".text-container");
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

  for (let i = 0; i < text.length; i++) {
    const textObj = text[i];
    const compiledText =
      i + 1 + " " + textObj.title + " " + textObj.artist + " " + textObj.type;

    if ((rot + compiledText.length) / numChars >= 1) {
      space += 1.5;
      rot = 0;
      circumference = 2 * Math.PI * (width * 0.5 - space * em - 0.5 * em);
      console.log("circumference", circumference);
      numChars = circumference / charWidth;
    }

    for (let j = 0; j < compiledText.length; j++) {
      const newParagraph = document.createElement("p");
      newParagraph.textContent = compiledText[j];
      newParagraph.style.transform = `rotate(${-rot / numChars}turn) translateY(calc(${width / 2}px - ${space}em - 0.5em)) `;
      rot += 1;

      textContainer.appendChild(newParagraph);
    }
  }

  // get circumference of each circle starting from outermost
  // divide by width of 1ch to get number of characters per ring
  // for each ring:
  //    for each character in compiledText:
  //        rotate character and push out by amt to get to ring
};

populateText();

window.addEventListener("resize", () => {
  const textContainer = document.querySelector(".text-container");
  textContainer.replaceChildren();
  populateText();
});
