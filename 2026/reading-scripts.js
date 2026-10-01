const text = [
  {
    title: "The Luminaries",
    author: "Eleanor Catton",
    img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1721152397i/18709559.jpg",
  },
  {
    title: "Vivienne Westwood: The Complete Collections",
    author: "Alexander Fury",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0yF1MQ6NF5TxkknmMj6qJzvEw28Uo71FNmPCBCckBK4awmlyHduuP5aDr&s=10",
  },
  {
    title: "Rei Kawakubo/Comme des Garçons: Art of the In-Between",
    author: "Andrew Bolton",
    img: "https://t0k10.com/cdn/shop/products/Format-accessoires-book-5_1024x1024.jpg?v=1496059207",
  },
  {
    title: "Crying in H Mart",
    author: "Michelle Zauner",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1601937850l/54814676.jpg",
  },
  {
    title: "Sula",
    author: "Toni Morrison",
    img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1632284105i/11347.jpg",
  },
  {
    title: "Friendly Good",
    author: "Lily van der Stokker",
    img: "https://m.media-amazon.com/images/I/41-7NfSovrL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "The Beauty of Everyday Things",
    author: "Soetsu Yanagi",
    img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1536549010i/41753650.jpg",
  },
  {
    title: "The Idiot",
    author: "Fyodor Dostoevsky",
    img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1370239624i/18007730.jpg",
  },
  {
    title: "Goodbye Tsugumi",
    author: "Banana Yoshimoto",
    img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1437930476i/1009231.jpg",
  },
  {
    title: "Kitchen",
    author: "Banana Yoshimoto",
    img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1327904393i/50144.jpg",
  },
  {
    title: "Moonlight Shadow",
    author: "Banana Yoshimoto",
    img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1373263458i/8043651.jpg",
  },
  {
    title: "The Woman in the Dunes",
    author: "Kobo Abe",
    img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1361254930i/9998.jpg",
  },
  {
    title: "The Beautiful and Damned",
    author: "F. Scott Fitzgerald",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7x6CQfNzxwrIjWzgxXQKT0VOyG5pWQnDzLwp1td5xQXcjcPSXP74v38Q&s=10",
  },
  {
    title: "Birnam Wood",
    author: "Eleanor Catton",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1653578326l/60784757.jpg",
  },
  {
    title: "Breasts and Eggs",
    author: "Mieko Kawakami",
    img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1573825173l/50736031.jpg",
  },
];

const topRow = document.querySelector(".top-row");
const leftCol = document.querySelector(".left-col");
const imgContainer = document.querySelector(".img-container");
const rightCol = document.querySelector(".right-col");
const bottomRow = document.querySelector(".bottom-row");

// leftCol.style.columnGap = imgContainer.getBoundingClientRect().width + "px";

const boxArr = [topRow, leftCol, rightCol, bottomRow];

const clearText = () => {
  for (let i = 0; i < boxArr.length; i++) {
    boxArr[i].replaceChildren();
  }
};

const populateText = () => {
  let activeIdx = 0;
  let activeBox = boxArr[activeIdx];

  for (let i = 0; i < text.length; i++) {
    const textObj = text[i];

    let number = i + 1 < 10 ? "0" + (i + 1) : i + 1;
    const fullText = number + " " + textObj.title + " " + textObj.author;
    const textArr = fullText.split(" ");
    // const newNumber = document.createElement("h2");
    // newNumber.classList.add("number");
    // newNumber.textContent = number;
    // const newTitle = document.createElement("h2");
    // newTitle.classList.add("title");
    // newTitle.textContent = textObj.title;
    // const newAuthor = document.createElement("h2");
    // newAuthor.classList.add("author");
    // newAuthor.textContent = textObj.author;

    // activeBox.appendChild(newNumber);
    // activeBox.appendChild(newTitle);
    // activeBox.appendChild(newAuthor);

    for (let j = 0; j < textArr.length; j++) {
      const newElt = document.createElement("h2");
      newElt.textContent = textArr[j];
      console.log(textArr[j]);
      activeBox.appendChild(newElt);

      const filler = document.createElement("span");
      filler.classList.add("filler");
      activeBox.appendChild(filler);

      if (activeBox.scrollHeight - activeBox.clientHeight > 5) {
        if (activeIdx < boxArr.length - 1) {
          activeIdx++;
          activeBox.lastElementChild.remove();
          activeBox.lastElementChild.remove();
          j--;
          activeBox = boxArr[activeIdx];
        }
      }
    }
    // activeBox.lastElementChild.remove();
  }
};

populateText();

const populateImages = () => {
  // const imgContainer = document.querySelector(".cd-img-container");
  // for (let i = 0; i < text.length; i++) {
  //   const newImg = document.createElement("img");
  //   newImg.src = text[i].img;
  //   newImg.alt = text[i].title;
  //   newImg.classList.add(`no-${i + 1}`);
  //   imgContainer.appendChild(newImg);
  // }
};

populateImages();

// window.addEventListener("resize", () => {
//   const textContainer = document.querySelector(".text-container");
//   textContainer.replaceChildren();
//   populateText();

//   if (window.innerWidth <= 768) {
//     inset = "calc(min(100vw - 2em, 100dvh - 5em) - 4em";
//   } else {
//     inset = "calc(min(100vw - 2em, 100dvh - 5em) - 4em";
//   }

//   if (window.innerWidth >= 768) {
//     root.style.setProperty(
//       "--hover-blocker-dim",
//       `${inset} - 2em - ${ringIndex * 1.85}em)`,
//     );
//   } else {
//     root.style.setProperty(
//       "--hover-blocker-dim",
//       `${inset} - 2em - ${ringIndex * 1.55}em)`,
//     );
//   }
// });

window.addEventListener("resize", () => {
  clearText();
  populateText();
});

window.addEventListener("scroll", () => {});
