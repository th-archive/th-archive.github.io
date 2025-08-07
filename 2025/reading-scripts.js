const numberColumnH2 = document.querySelectorAll(".number-column h2");
const anglesBtwn = 360 / numberColumnH2.length;
numberColumnH2.forEach((h2) => {
  const index = Number(h2.innerHTML);
  h2.style.transform = `rotateY(${
    index * anglesBtwn
  }deg) translateZ(35vw) rotateY(90deg) `;
});
