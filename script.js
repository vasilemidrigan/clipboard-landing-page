"use strict";

// Variables
const imgDesk = document.querySelector(".desk");
const tabletImg = document.querySelector(".image-tablet");
const mainA = document.querySelector(".main__a");
const mainB = document.querySelector(".main__b");
const mainC = document.querySelector(".main__c");
const deskImage = document.querySelector(".grid-image");
const cntntDefault = document.querySelectorAll(".cntnt-default");
const cntntDefaultItem = document.querySelectorAll(".cntnt-default__item");

if (window.innerWidth > 1000) {
  // main__b
  const toFlex = document.createElement("div");
  toFlex.className = "toFlex";
  mainB.insertBefore(toFlex, mainB.children[1]);
  for (let i = 0; i < cntntDefaultItem.length; i++) {
    toFlex.appendChild(cntntDefaultItem[i]);
  }
  // main__c
  mainC.children[0].classList.add("toFlex");

  // grid
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
