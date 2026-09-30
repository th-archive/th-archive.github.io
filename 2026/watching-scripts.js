const watchingLeft = document.getElementById("watching-left");
const watchingRight = document.getElementById("watching-right");
const watchingImgs = document.getElementById("imgs");
const main = document.querySelector("main");

const entries = [
  {
    title: "Guardian: The Lonely and Great God",
    producer: "Hwa&Dam Pictures",
    type: "TV Show",
  },
  {
    title: "Guardian: The Lonely and Great God",
    producer: "Hwa&Dam Pictures",
    type: "TV Show",
  },
  {
    title: "Guardian: The Lonely and Great God",
    producer: "Hwa&Dam Pictures",
    type: "TV Show",
  },
  {
    title: "Guardian: The Lonely and Great God",
    producer: "Hwa&Dam Pictures",
    type: "TV Show",
  },
  {
    title: "Guardian: The Lonely and Great God",
    producer: "Hwa&Dam Pictures",
    type: "TV Show",
  },
  {
    title: "Guardian: The Lonely and Great God",
    producer: "Hwa&Dam Pictures",
    type: "TV Show",
  },
  {
    title: "Guardian: The Lonely and Great God",
    producer: "Hwa&Dam Pictures",
    type: "TV Show",
  },
  {
    title: "Guardian: The Lonely and Great God",
    producer: "Hwa&Dam Pictures",
    type: "TV Show",
  },
  {
    title: "Guardian: The Lonely and Great God",
    producer: "Hwa&Dam Pictures",
    type: "TV Show",
  },
  {
    title: "Guardian: The Lonely and Great God",
    producer: "Hwa&Dam Pictures",
    type: "TV Show",
  },
];

const loadContent = () => {
  for (let j = 0; j < entries.length; j++) {
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

const firstClone = watchingLeft.children[12];
const originalHeight = firstClone.offsetTop;

let isResetting = false;

main.addEventListener("scroll", () => {
  if (isResetting) return;

  const scrollTop = main.scrollTop;

  if (scrollTop >= originalHeight || scrollTop < 0) {
    isResetting = true;

    main.style.scrollSnapType = "none";

    if (scrollTop >= originalHeight) {
      main.scrollTop = scrollTop - originalHeight;
    } else if (scrollTop < 0) {
      main.scrollTop = originalHeight + scrollTop;
    }

    requestAnimationFrame(() => {
      main.style.scrollSnapType = "y proximity";
      isResetting = false;
    });
  }
});

main.addEventListener("scrollsnapchange", (event) => {
  // Returns the snapped element in the block (vertical/horizontal layout dependent) direction
  let snapped = event.snapTargetBlock;
  console.log(main.scrollTop);
  if (main.scrollTop < 5) {
    snapped = watchingLeft.children[3];
  }
  console.log("Active snap target:", snapped);
});
