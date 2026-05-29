"use strict";


//read me button
const readBtn = document.querySelector("#readBtn");

readBtn.addEventListener("click", () => {
  document.querySelector(".speaker-features").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

//explore button
const exploreBtn = document.querySelector("#exploreBtn");

exploreBtn.addEventListener("click", () => {
  document.querySelector(".color-section").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

// Switch colors
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
    productImage.alt = "Lumina højtaler i farven " + chosenColor;

    colorButtons.forEach(function(btn) {
      btn.classList.remove("active");
    });

    button.classList.add("active");
  });
});

// Features
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