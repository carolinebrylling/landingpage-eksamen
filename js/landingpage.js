"use strict";

const readBtn = document.querySelector("#readBtn");


// readBtn
readBtn.addEventListener("click", () => {
  document.querySelector(".features").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

const exploreBtn = document.querySelector("#exploreBtn");

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
//switch colors
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

//Features 
const items = document.querySelectorAll(".item");

items.forEach((item) => {
  const button = item.querySelector("button");
  const icon = item.querySelector(".icon");

  button.addEventListener("click", () => {
    item.classList.toggle("open");

    if (item.classList.contains("open")) {
      icon.textContent = "-";
    } else {
      icon.textContent = "+";
    }
  });
});

