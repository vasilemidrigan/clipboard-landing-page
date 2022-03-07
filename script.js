"use strict";

// Variables
const imgDesk = document.querySelector(".desk");
const tabletImg = document.querySelector(".image-tablet");
const mainA = document.querySelector(".main__a");
const deskImage = document.querySelector(".grid-image");
const cntntDefault = document.querySelectorAll(".cntnt-default");

// Creating the grid for desktop image and 3 items
//   if screen width is greather than 1000px
if (window.innerWidth > 1000) {
  const grid = document.createElement("div");
  grid.className = "grid";

  mainA.insertBefore(grid, mainA.children[5]);

  grid.appendChild(deskImage);
  deskImage.classList.add("img-grid");

  for (let i = 1; i <= 3; i++) {
    cntntDefault[i].classList.add(`active-grid__${[i]}`);
    grid.appendChild(cntntDefault[i]);
  }
}
