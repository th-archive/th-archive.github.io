const imgs = document.querySelectorAll(".img-column img");
const numbers = document.querySelectorAll(".number-column p");
const infos = document.querySelectorAll(".info-column .info");
const anglesBtwn = 360 / imgs.length;
imgs.forEach((img, key) => {
  img.style.setProperty("--rotation", `${key * anglesBtwn}deg`);
  img.style.setProperty("--index", `${key}`);
});
numbers.forEach((num, key) => {
  num.style.setProperty("--index", `${key}`);
});
infos.forEach((info, key) => {
  info.style.setProperty("--index", `${key}`);
});

const main = document.querySelector("main");
const scrollableDiv = document.querySelector(".scrollable div");
main.addEventListener("scroll", (event) => {
  console.log(main.scrollLeft);

  if (main.scrollLeft >= scrollableDiv.clientWidth * (imgs.length - 0.1)) {
    main.scrollTo({ left: 0 });
  }
});
