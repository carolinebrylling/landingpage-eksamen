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
