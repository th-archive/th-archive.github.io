const watchingLeft = document.getElementById("watching-left");
const watchingRight = document.getElementById("watching-right");
const main = document.querySelector("main");

const leftStart = document.querySelector("#watching-left .entry.start");
// const righties = document.querySelector("#watching-right .entry.start");

const itemsL = Array.from(watchingLeft.children);
const itemsR = Array.from(watchingRight.children);
itemsL.forEach((item) => {
  const clone = item.cloneNode(true);
  watchingLeft.appendChild(clone);
});
itemsR.forEach((item) => {
  const clone = item.cloneNode(true);
  watchingRight.appendChild(clone);
});

const firstClone = watchingLeft.children[12];
const originalHeight = firstClone.offsetTop;

let isResetting = false;

main.addEventListener("scroll", () => {
  if (isResetting) return;

  const scrollTop = main.scrollTop;

  if (scrollTop >= originalHeight || scrollTop <= 0) {
    isResetting = true;

    main.style.scrollSnapType = "none";

    if (scrollTop >= originalHeight) {
      main.scrollTop = scrollTop - originalHeight;
    } else if (scrollTop <= 0) {
      main.scrollTop = originalHeight + scrollTop;
    }

    requestAnimationFrame(() => {
      main.style.scrollSnapType = "y proximity";
      isResetting = false;
    });
  }
});
