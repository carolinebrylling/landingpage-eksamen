"use strict";

console.log("JavaScript virker");

const buyBtn = document.querySelector("#buyBtn");
const readBtn = document.querySelector("#readBtn");
const exploreBtn = document.querySelector("#exploreBtn");

// buyBtn
buyBtn.addEventListener("click", () => {
  alert("Tak for din interesse! Produktet er lagt i kurven.");
});

// readBtn
readBtn.addEventListener("click", () => {
  document.querySelector(".features").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

// exploreBtn
exploreBtn.addEventListener("click", () => {
  document.querySelector(".color-section").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

// my products
const products = [
  {
    name: "Lumina White",
    color: "Moonlight White",
    image: "img/moonlight-white.png",
    alt: "Lumina højtaler i Moonlight White"
  },

  {
    name: "Lumina Rose",
    color: "Dusty Rose",
    image: "img/dusty-rose.png",
    alt: "Lumina højtaler i Dusty Rose"
  },

  {
    name: "Lumina Green",
    color: "Saga Green",
    image: "img/saga-green.png",
    alt: "Lumina højtaler i Saga Green"
  },

  {
    name: "Lumina Mist",
    color: "Lavender Mist",
    image: "img/lavender-mist.png",
    alt: "Lumina højtaler i Lavender Mist"
  }
];

let currentIndex = 0;

const productImage = document.getElementById("productImage");
const productName = document.getElementById("productName");
const productColor = document.getElementById("productColor");
const changeColorBtn = document.getElementById("changeColorBtn");

changeColorBtn.addEventListener("click", function () {
  currentIndex++;

  if (currentIndex >= products.length) {
    currentIndex = 0;
  }

  productImage.src = products[currentIndex].image;
  productImage.alt = products[currentIndex].alt;
  productName.textContent = products[currentIndex].name;
  productColor.textContent = products[currentIndex].color;
});
