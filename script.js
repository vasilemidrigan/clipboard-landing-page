"use strict";

// Variables
const mainA = document.querySelector(".main__a");
const mainB = document.querySelector(".main__b");
const mainC = document.querySelector(".main__c");
const deskImage = document.querySelector(".grid-image");
const cntntDefault = document.querySelectorAll(".cntnt-default");
const cntntDefaultItem = document.querySelectorAll(".cntnt-default__item");
const footer = document.querySelector("footer");
const footerLogo = document.querySelector(".footer__logo");
const list = document.querySelector(".list");

// Create aditional divs in order to change positioning of elements on the page
// if the screen is wider than 1000px
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

  // footer
  const ftrLogo = document.createElement("div");
  ftrLogo.className = "ftrLogo";
  footer.insertBefore(ftrLogo, footerLogo);
  ftrLogo.appendChild(footerLogo);

  const ftrList = document.createElement("div");
  ftrList.className = "ftrList";
  footer.insertBefore(ftrList, list);
  ftrList.appendChild(list);
}
