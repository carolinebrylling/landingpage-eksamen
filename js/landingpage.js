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
const colorButtons = document.querySelectorAll(".color-btn");

colorButtons.forEach(function(button) {
  button.addEventListener("click", function() {

    const chosenName = button.dataset.name;
    const chosenColor = button.dataset.color;
    const chosenImage = button.dataset.image;

    productName.textContent = chosenName;
    productColor.textContent = chosenColor;

    productImage.src = chosenImage;
    productImage.alt = chosenName;

    colorButtons.forEach(function(btn) {
      btn.classList.remove("active");
    });

    button.classList.add("active");
  });
});