const imgs = document.querySelectorAll(".img-column img");
const numbers = document.querySelectorAll(".number-column p");
const anglesBtwn = 360 / imgs.length;
imgs.forEach((img, key) => {
  img.style.setProperty("--rotation", `${key * anglesBtwn}deg`);
  img.style.setProperty("--index", `${key}`);
});
numbers.forEach((num, key) => {
  num.style.setProperty("--index", `${key}`);
});
