"use strict";

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");

  if (nav.classList.contains("active")) {
    menuBtn.textContent = "×";
  } else {
    menuBtn.textContent = "☰";
  }
});


  const buyBtn = document.querySelector("#buyBtn");
    const readBtn = document.querySelector("#readBtn");

    buyBtn.addEventListener("click", () => {
      alert("Tak for din interesse! Produktet er lagt i kurven.");
    });

    readBtn.addEventListener("click", () => {
      document.querySelector(".description").scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    });

    