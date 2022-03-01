"use strict";

// Variables
const imgDesk = document.querySelector(".desk");
const mainA = document.querySelector(".main__a");
const deskImage = document.querySelector(".image");
const cntntDefault = document.querySelectorAll(".cntnt-default");
console.log("cntntDefault:", cntntDefault);

if (window.innerWidth > 1000) {
  const grid = document.createElement("div");
  grid.className = "grid";

  mainA.appendChild(grid);

  grid.appendChild(deskImage);
  deskImage.classList.add("img-grid");

  for (let i = 1; i <= 3; i++) {
    cntntDefault[i].classList.add(`active-grid__${[i]}`);
    grid.appendChild(cntntDefault[i]);
  }
}
