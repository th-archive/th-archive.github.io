const imgs = document.querySelectorAll(".img-column img");
const numbers = document.querySelectorAll(".number-column p");
const infos = document.querySelectorAll(".info-column .info");
const anglesBtwn = 360 / (imgs.length + 1);
imgs.forEach((img, key) => {
  img.style.setProperty("--rotation", `${(key + 1) * anglesBtwn}deg`);
  img.style.setProperty("--index", `${key + 1}`);
});
numbers.forEach((num, key) => {
  num.style.setProperty("--index", `${key + 1}`);
});
infos.forEach((info, key) => {
  info.style.setProperty("--index", `${key + 1}`);
});

const main = document.querySelector("main");
const scrollableDiv = document.querySelector(".scrollable");
const numCol = document.querySelector(".number-column");
const imgCol = document.querySelector(".img-column");
const infoCol = document.querySelector(".info-column");

// Duplicate first element
scrollableDiv.prepend(scrollableDiv.lastElementChild.cloneNode(true));
numCol.prepend(numCol.lastElementChild.cloneNode(true));
imgCol.prepend(imgCol.lastElementChild.cloneNode(true));
infoCol.prepend(infoCol.lastElementChild.cloneNode(true));

imgCol.firstElementChild.style.setProperty(
  "--rotation",
  `${0 * anglesBtwn}deg`
);
imgCol.firstElementChild.style.setProperty("--index", `${0}`);

scrollableDiv.prepend(
  scrollableDiv.children[numCol.childElementCount - 3].cloneNode(true)
);

scrollableDiv.append(
  scrollableDiv.children[numCol.childElementCount - 3].cloneNode(true)
);
numCol.prepend(numCol.children[numCol.childElementCount - 3].cloneNode(true));
imgCol.prepend(imgCol.children[numCol.childElementCount - 3].cloneNode(true));
infoCol.prepend(infoCol.children[numCol.childElementCount - 3].cloneNode(true));

imgCol.firstElementChild.style.setProperty(
  "--rotation",
  `${-1 * anglesBtwn}deg`
);
imgCol.firstElementChild.style.setProperty("--index", `${-1}`);

scrollableDiv.append(scrollableDiv.children[2].cloneNode(true));
numCol.append(numCol.children[2].cloneNode(true));
imgCol.append(imgCol.children[2].cloneNode(true));
infoCol.append(infoCol.children[2].cloneNode(true));

imgCol.lastElementChild.style.setProperty(
  "--rotation",
  `${29 * anglesBtwn}deg`
);
imgCol.lastElementChild.style.setProperty("--index", `${29}`);

main.scrollLeft = scrollableDiv.firstElementChild.clientWidth;
// Scroll listener
main.addEventListener("scroll", (event) => {
  const totalWidth = event.target.scrollWidth; // Total height of scrollable content
  const scrollLocation = Math.round(event.target.scrollLeft); // Amount scrolled
  const containerWidth = event.target.clientWidth; // Size of element

  // If bottom reached
  if (totalWidth - scrollLocation <= containerWidth * 2) {
    console.log("hi");
    imgCol.firstElementChild.style.setProperty("visibility", "hidden");
    imgCol.children[1].style.setProperty("visibility", "hidden");
    imgCol.children[2].style.setProperty("visibility", "hidden");

    imgCol.lastElementChild.style.setProperty("visibility", "visible");
    imgCol.children[imgCol.childElementCount - 3].style.setProperty(
      "visibility",
      "visible"
    );
    imgCol.children[imgCol.childElementCount - 2].style.setProperty(
      "visibility",
      "visible"
    );
  } else {
    console.log("bye");
    imgCol.firstElementChild.style.setProperty("visibility", "visible");
    imgCol.children[1].style.setProperty("visibility", "visible");
    imgCol.children[2].style.setProperty("visibility", "visible");

    imgCol.lastElementChild.style.setProperty("visibility", "hidden");
    imgCol.children[imgCol.childElementCount - 3].style.setProperty(
      "visibility",
      "hidden"
    );
    imgCol.children[imgCol.childElementCount - 2].style.setProperty(
      "visibility",
      "hidden"
    );
  }

  if (totalWidth - scrollLocation <= containerWidth) {
    event.target.scrollTo({
      left: scrollableDiv.firstElementChild.clientWidth,
    });
  } else if (scrollLocation === 0) {
    event.target.scrollTo({
      left: 28 * scrollableDiv.firstElementChild.clientWidth,
    });
  }
});
