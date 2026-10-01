const watchingLeft = document.getElementById("watching-left");
const watchingRight = document.getElementById("watching-right");
const watchingImgs = document.getElementById("watching-imgs");
const main = document.querySelector("main");

const entries = [
  {
    title: "Do the Right Thing",
    producer: "40 Acres and a Mule Filmworks",
    img: "https://m.media-amazon.com/images/M/MV5BODA2MjU1NTI1MV5BMl5BanBnXkFtZTgwOTU4ODIwMjE@._V1_FMjpg_UX1000_.jpg",
    type: "TV Show",
  },
  {
    title: "Community",
    producer: "Krasnoff/Foster Entertainment",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-YpeX4gVVB92oRmcxvyPDTql6_mL3BE084xw8cnHqsX7vOFiDeHd2sWU&s=10",
    type: "TV Show",
  },
  {
    title: "Can This Love Be Translated?",
    producer: "Studio Sot",
    img: "https://m.media-amazon.com/images/M/MV5BNDBhMDhmMzMtYTRjZS00NTZhLTllNjAtNDkxODVkYTdmY2Q2XkEyXkFqcGc@._V1_.jpg",
    type: "TV Show",
  },
  {
    title: "Chainsaw Man — The Movie: Reze Arc",
    producer: "MAPPA",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgOTJqvkcWj-TqAa-YOLZzvt1EneVb0LCuvfO_-TX0hsBEX36kzw7lhw2A&s=10",
    type: "Movie",
  },
  {
    title: "In Your Radiant Season",
    producer: "Pan Entertainment",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxzHuPUeKe_v_WiKY4VHuY3DCo-LYUBqerUjGJkMWQc6KR75I-TpCwSZ8&s=10",
    type: "TV Show",
  },
  {
    title: "18×2 Beyond Youthful Days",
    producer: "Jump! Boys",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlF7ecV0Zujv-1Sy4qkk9e_pCkrjdffOoyS0lZr04YrwLFpKJUoRX_V3YL&s=10",
    type: "Movie",
  },
  {
    title: "Takopi's Original Sin",
    producer: "Enishiya",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsSuWu5QkKy8vkGU0SL2_JWxKEx-skJsrmJaJWqMtncvvTPPdNGZTf8LM&s=10",
    type: "TV Show",
  },
];

const loadContent = () => {
  for (let j = entries.length - 3; j < entries.length * 2 - 3; j++) {
    const i = j % entries.length;
    const newEntryL = document.createElement("div");
    newEntryL.classList.add("entry");
    newEntryL.classList.add(`no-${i + 1}`);
    newEntryL.innerHTML = `<p>${i + 1}</p>
      <p>${entries[i].title}</p>`;
    watchingLeft.appendChild(newEntryL);

    const newEntryR = document.createElement("div");
    newEntryR.classList.add("entry");
    newEntryR.classList.add(`no-${i + 1}`);
    newEntryR.innerHTML = `<p>${entries[i].producer}</p>
      <p>${entries[i].type}</p>`;
    watchingRight.appendChild(newEntryR);

    const newEntryI = document.createElement("img");
    newEntryI.classList.add(`no-${i + 1}`);
    newEntryI.src = entries[i].img;
    newEntryI.alt = entries[i].title;
    watchingImgs.appendChild(newEntryI);
  }
};

loadContent();

const itemsL = Array.from(watchingLeft.children);
const itemsR = Array.from(watchingRight.children);
// const itemsI = Array.from(watchingImgs.children);
itemsL.forEach((item) => {
  const clone = item.cloneNode(true);
  watchingLeft.appendChild(clone);
});
itemsR.forEach((item) => {
  const clone = item.cloneNode(true);
  watchingRight.appendChild(clone);
});

// itemsI.forEach((item) => {
//   const clone = item.cloneNode(true);
//   watchingImgs.appendChild(clone);
// });

const firstClone = watchingLeft.children[entries.length];
const originalHeight = firstClone.offsetTop;

let isResetting = false;

main.addEventListener("scroll", () => {
  if (isResetting) return;

  const scrollTop = main.scrollTop;
  watchingImgs.style.opacity = "0";

  if (scrollTop >= originalHeight) {
    isResetting = true;

    main.style.scrollSnapType = "none";
    main.scrollTop = scrollTop - originalHeight;

    requestAnimationFrame(() => {
      main.style.scrollSnapType = "y proximity";
      isResetting = false;
    });
  }
});

main.addEventListener("scrollend", () => {
  watchingImgs.style.opacity = "1";
});

main.addEventListener("scrollsnapchange", (event) => {
  let snapped = event.snapTargetBlock;
  if (main.scrollTop < 5) {
    snapped = watchingLeft.children[3];
  }

  const highlightedImg = document.querySelector("img.highlighted");
  if (highlightedImg) {
    highlightedImg.classList.remove("highlighted");
  }

  if (!snapped) return;
  const img = document.querySelector(
    `#watching-imgs img.${snapped.classList[1]}`,
  );
  img.classList.add("highlighted");
});
